import { useContext, useEffect,  useState } from 'react'
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
            if (typeof (Storage) !== undefined) {
                const token = sessionStorage.getItem(tokenLable)
                if (token) {
                    setAuthToken(token)
                    return
                }
                else document.getElementById("loginButton").click()
            }
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
        <div className="container">
            <h4 className="text-center text-light bg-success p-4">{text}</h4>
            {text === startText && 
                <p className="fs-6 roboto-slab">
                    Download your vaccination certificate from here for your future referances for free.
                    Enter your Referance id mentioned in your appointment slip here. For login, Use your 
                    mobile number which was registered for vaccination for User Verification. Now your 
                    download is complete.
                </p>
            }
            {!loading ? <form className="mt-4" onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control no-border" id="ReferenceID" placeholder="Reference ID" value={id} onChange={e => { setId(e.target.value); }} minLength={14} maxLength={14} />
                    <label htmlFor="ReferenceID">Reference ID</label>
                    <div className="form-text" id="ReferenceID">
                        Enter your Reference Id Mentioned in your Appointment Slip
                    </div>
                </div>
                <button className="btn btn-outline-success" type="submit">Submit</button>
            </form> :
                <div className=" d-flex flex-column justify-content-center align-items-center" style={{ width: "100%", minHeight: "40vh" }}>
                    <div className="spinner-border text-info" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}