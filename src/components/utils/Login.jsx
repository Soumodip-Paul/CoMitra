import { useState, useEffect, useContext, Fragment, useRef, } from 'react'
import { tokenLable } from '../assets/js/_config'
import { Auth } from '../context/authContext'
import { generateOTP } from '../network/handleOTP'
import { validateOTP } from '../network/handleOTP'
import { Dialog, Transition } from '@headlessui/react'
import { LoginIcon } from '@heroicons/react/outline'
import { showInfoAlert, showErrorAlert, showSuccessAlert } from '../items/Toast'

export const Login = () => {

    const cancelButtonRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [otp, setOtp] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [time, setTime] = useState(-1)
    const login = useContext(Auth)
    const { authToken, setAuthToken } = login;

    const logOut = e => {
        setAuthToken(null)
        window.sessionStorage.removeItem(tokenLable)
        showSuccessAlert("Successfully Logged Out")
    }


    const submitPhoneNumber = async e => {

        let response = await generateOTP(phoneNo)
        if (!response) {
            resetField()
            showErrorAlert("Internal Error Occured")
            return
        }
        if (response.ok) {
            let data = await response.json()
            setProcessing(true)
            setAccessToken(data.txnId)
            showSuccessAlert("OTP sent Successfully ")
            setTime(180)
        }
        else {
            let data = await response.text()
            showErrorAlert(data)
            resetField()
        }
    }

    useEffect(() => {
        setAuthToken(window.sessionStorage.getItem(tokenLable))
        let key = setTimeout(() => {
            if (time > 0) { setTime(time - 1) }
            else if (time === 0) {
                setAccessToken('')
                showErrorAlert("Timed Out")
                resetField()
            }

        }, 1000)
        return () => {
            clearTimeout(key)
        }

    }, [time,setAuthToken])

    const submitOTP = async e => {
        let response = await validateOTP(otp, accessToken)
        if (!response) {
            resetField()
            showErrorAlert("Internal Error Occured")
        }
        const data = await response.json()
        if (response.ok) {
            setAccessToken('')
            window.sessionStorage.setItem(tokenLable, data.token)
            setAuthToken(data.token)
            showSuccessAlert("Successfully Logged In")
            resetField()
        }
        else {
            showErrorAlert(data.error)
        }
    }

    const resetField = () => {
        setOpen(false)
        setProcessing(false)
        setOtp('')
        setPhoneNo('')
    }

    return (
        !authToken ?
        <>
            <button id='loginButton' className="inline-flex items-center border-0 py-1 px-6 focus:outline-none rounded text-base mt-4 md:mt-0 text-white bg-indigo-500 hover:bg-indigo-600" onClick={e => setOpen(!open)}>Log In</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="form" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen} onSubmit={e => {
                    e.preventDefault();
                    if (!processing) submitPhoneNumber()
                    else submitOTP()
                }} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <LoginIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                                    Log In Required
                                                </Dialog.Title>
                                                <div className="mt-8 space-y-6">
                                                    <div className="rounded-md shadow-sm -space-y-px">
                                                        {!processing ? <div>
                                                            <label htmlFor="phone-number" className="sr-only">
                                                                Phone Number
                                                            </label>
                                                            <input
                                                                id="phone-number"
                                                                name="phone"
                                                                type="tel"
                                                                value={phoneNo}
                                                                max={9999999999}
                                                                maxLength={10}
                                                                pattern={"[0-9]{10}"}
                                                                autoComplete="email"
                                                                required
                                                                onChange={e => setPhoneNo(e.target.value)}
                                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                placeholder="Enter phone Number"
                                                            />
                                                        </div> :
                                                            <div>
                                                                <label htmlFor="password" className="sr-only">
                                                                    Password
                                                                </label>
                                                                <input
                                                                    id="password"
                                                                    name="password"
                                                                    type="password"
                                                                    autoComplete="current-password"
                                                                    value={otp}
                                                                    maxLength={6}
                                                                    required
                                                                    onChange={e => setOtp(e.target.value)}
                                                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                    placeholder="Enter OTP"
                                                                />
                                                            </div>}
                                                    </div>
                                                    <small className='text-gray-500 pb-10'><em>{!processing ?
                                                        "Enter your registered phone number" :
                                                        <b>Your OTP is valid for <span className='text-red-500'>{time} secs</span></b>}</em></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">

                                        <button
                                            type="submit"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 mb-4 md:mb-0 bg-white text-base font-medium text-gray-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={e => { }} disabled={!processing ? phoneNo.length === 0 : false}
                                        >
                                            {!processing ? "Login" : "Submit OTP"}
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => { resetField(); showInfoAlert("Cancelled") }} ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
        :
        <button id='loginButton' className="inline-flex items-center border-0 py-1 px-6 focus:outline-none rounded text-base mt-4 md:mt-0 text-white bg-indigo-500 hover:bg-indigo-600" onClick={logOut}>Log Out</button>
    )
}


// export const LoginButton = () => {
//     const modalId = "login"
//     const login = useContext(Auth)
//     const { authToken, setAuthToken } = login;
//     const logOut = e => {
//         setAuthToken(null)
//         window.sessionStorage.removeItem(tokenLable)
//     }
//     useEffect(() => {
//         setAuthToken(window.sessionStorage.getItem(tokenLable))
//     }, [setAuthToken])
//     return (
//         !authToken ?
//             <button type="button" id="loginButton" className="btn btn-success rounded-pill px-4 float-end" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
//                 Log In
//             </button>
//             : <button type="button" className="btn btn-success float-end" onClick={logOut}>Log Out</button>
//     )
// }