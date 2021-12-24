import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { getCentersByPin } from "../network/fetchData"
import { setDescription, setTitle } from "../items/MetaDirective"

const _desc = "Find the vaccination centers near you using your PIN Code of your area"

export const PinUtils = ({ setData, setLoading, setSubmitClick }) => {

    const [pin, setPin] = useState("")
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    const onChange = e => {
        setPin(e.target.value)
        let form = document.getElementById("form_001")
        if (form.classList.contains("was-validated")) form.classList.remove('was-validated')
    }

    const asyncGetData = async () => {
        setLoading(true)
        const data = await getCentersByPin(pin, formatDate(date));
        setData(data.sessions)
        setLoading(false)
        setSubmitClick(1)
    }

    const onSubmitPin = event => {
        event.preventDefault()
        let form = document.getElementById("form_001")
        if (!form.checkValidity()) {
            form.classList.add('was-validated')
        }
        else {
            asyncGetData()
        }
    }

    const onDateChanged = e => {
        // returns date in dd-mm-yyyy
        setDate(e.target.value)
    }
    useEffect(() => {
        setTitle(`Find using ${window.location.pathname.slice(1).toLocaleUpperCase()} | CoMitra`);
        setDescription(_desc)
        setSubmitClick(0)
    }, [setSubmitClick])
    return (
        <form className="g-3 needs-validation" id="form_001" noValidate onSubmit={onSubmitPin}>
                <div className="input-group  mb-3">
                    <span className="input-group-text bg-success text-light" style={{
                        borderRadius: "12px 0 0 12px"
                    }}>Enter PIN</span>
                    <input className="form-control" type="text" placeholder="Enter PIN" maxLength={6} minLength={6} aria-label="Enter PIN" aria-describedby="button-addon" value={pin} onChange={onChange} required style={{
                        borderRadius: "0 12px 12px 0"
                    }} />
                    <div className="invalid-feedback">
                        Invalid Pin Code!
                    </div>
                </div>
                <div className="input-group  mb-3">
                    <span className="input-group-text bg-success text-light" style={{
                        borderRadius: "12px 0 0 12px"
                    }}>DATE</span>
                    <input className="form-control" type="date" name="date" id="date" value={date} onChange={onDateChanged} />

                    <button className="btn btn-info text-light" type="submit" id="button-addon" style={{
                        borderRadius: "0 12px 12px 0"
                    }}>Submit</button>
                </div>
        </form>
    )
}

PinUtils.propTypes = {
    setData: PropTypes.func.isRequired,
}


const formatDate = date => {
    //converts date from dd-mm-yyyy to yyyy-mm-dd
    return date.split('-').reverse().join('-')
}

