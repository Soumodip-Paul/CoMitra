import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { tokenLable } from '../assets/js/_config'
import { Auth } from '../context/authContext'
import { setDescription, setTitle } from '../items/MetaDirective'
import { downloadCert } from '../network/DownloadCert'

const _desc = "Download your COVID-19 vaccination certificate from here for free. What you need is just your Referance ID and your Registered Mobile Number for vaccination "

const startText = "Download Your Vaccine Certificate Here"

export const DownloadCertificate = () => {

    const auth = useContext(Auth)
    const [id, setId] = useState('')
    const [text, setText] = useState(startText)
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const { authToken, setAuthToken } = auth

    useEffect(() => {
        setTitle("Download Certificate | CoMitra")
        setDescription(_desc)
    }, [])

    const onSubmit = e => {
        e.preventDefault()
        if (!authToken) {
            const token = sessionStorage.getItem(tokenLable)
            if (token) {
                setAuthToken(token)
                return
            }
            else document.getElementById("loginButton").click()
        }
        else {
            setLoading(true)
            setText("Download Started")
            downloadCert(authToken, id, () => {
                setLoading(false)
                setText("Download Completed")
                setTimeout(() => {
                    history.push("/")
                }, 3000)
            }, (e, r) => {
                if (e && r && e === 401) {
                    setText("Download Failed! Your mobile number is not assosiated with this reference id")
                }
                else {
                    setLoading(false)
                    setText("Download Failed")
                }
            })
        }
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 lg:py-24 py-8 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">{text}</h1>
                    <p className="leading-relaxed mt-4">
                        Download your vaccination certificate from here for your future referances for free.Enter your Referance id mentioned in your appointment slip here. For login, Use your mobile number which was registered for vaccination for User Verification. Now your download is complete.</p>
                </div>
                <form className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0" onSubmit={onSubmit}>
                    {!loading ? <>
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Download Now</h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Reference ID</label>
                            <input type="text" id="ReferenceID" placeholder="Enter your Reference ID" value={id} onChange={e => { setId(e.target.value); }} minLength={14} maxLength={14} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                        <p className="text-xs text-gray-500 mt-3">Enter your Reference Id Mentioned in your Appointment Slip</p>
                    </> :
                        <>
                            <svg role="status" className="h-8 w-8 animate-spin mx-auto text-gray-200 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>}
                </form>
            </div>
        </section>
    )
}