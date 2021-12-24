import { useState, useEffect, useContext } from 'react'
import { tokenLable } from '../assets/js/_config'
import { Auth } from '../context/authContext'
import { generateOTP } from '../network/handleOTP'
import { validateOTP } from '../network/handleOTP'

export const Login = () => {
    const [processing, setProcessing] = useState(false)
    const [otp, setOtp] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [alertOpacity, setAlertOpacity] = useState(0)
    const [time, setTime] = useState(180)
    const [alertText, setAlertText] = useState('')
    const login = useContext(Auth)
    const { setAuthToken } = login;
    const id = "login";


    const showAlert = (text) => {
        setAlertText(text)
        setAlertOpacity(1)
        setTimeout(() => {
            setAlertOpacity(0)
            setAlertText('')
        }, 1500)
    }

    const submitPhoneNumber = async e => {
        let data = await generateOTP(phoneNo)
        if (data) {
            setProcessing(true)
            setAccessToken(data.txnId)
            setTime(180)
        }
        else {
            resetField()
            showAlert("Enter a valid mobile number")
        }
    }

    useEffect(() => {
        let key = setTimeout(() => {
            if (time > 0) { setTime(time - 1) }
            else {
                resetField()
                setAccessToken('')
                showAlert("Timed Out")
            }

        }, 1000)
        return () => {
            clearTimeout(key)
        }

    }, [time])

    const submitOTP = async e => {
        let data = await validateOTP(otp, accessToken)
        if (data) {
            setAccessToken('')
            resetField()
            window.sessionStorage.setItem(tokenLable, data.token)
            setAuthToken(data.token)
            document.getElementById("closeLogin").click()
        }
        else {
            showAlert("Enter a valid OTP")
        }
    }

    const resetField = () => {
        setProcessing(false)
        setOtp('')
        setPhoneNo('')
    }

    return (
        <div className="modal fade roboto-slab" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${id}Label`}>Login Required</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-block text-center fw-bolder " style={{ height: "25px" }}>{processing && <> Your OTP is valid for <span className="text-danger">{time} sec </span> </>}</div>
                        {!processing ?
                            <>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control no-border" id="pNo" placeholder="Enter Your Phone Number" value={phoneNo} onChange={e => setPhoneNo(e.target.value)} />
                                    <label htmlFor="pNo">Phone Number</label>
                                    <div className="form-text pNo">Enter your registered phone Number here</div>
                                </div>
                            </>
                            :
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control no-border" id="floatingPassword" placeholder="Password" value={otp} onChange={e => { setOtp(e.target.value); }} />
                                <label htmlFor="floatingPassword">OTP</label>
                            </div>
                        }
                        <div className="alert alert-danger mb-2 p-2 text-danger" style={{ opacity: alertOpacity, height: "40px" }} role="alert">
                            {alertText}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="closeLogin" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => resetField()}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={!processing ? e => submitPhoneNumber() : e => submitOTP()} disabled={ !processing ? phoneNo.length === 0 : false }>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const LoginButton = () => {
    const modalId = "login"
    const login = useContext(Auth)
    const { authToken, setAuthToken } = login;
    const logOut = e => {
        setAuthToken(null)
        if (typeof (Storage) !== undefined) {
            window.sessionStorage.removeItem(tokenLable)
        }
    }
    useEffect(() => {
        if (typeof (Storage) !== undefined) {
            setAuthToken(window.sessionStorage.getItem(tokenLable))
        }
    }, [setAuthToken])
    return (
        !authToken ?
            <button type="button" id="loginButton" className="btn btn-success rounded-pill px-4 float-end" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                Log In
            </button>
            : <button type="button" className="btn btn-success float-end" onClick={logOut}>Log Out</button>
    )
}