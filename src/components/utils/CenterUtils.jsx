import { useState } from 'react'

export const CenterUtils = ({ setData, setLoading }) => {

    const [date, setDate] = useState(getCurrentDate())
    const [id, setId] = useState('')

    const onChange = e => {
        setId(e.target.value)
        let form = document.getElementById("form_002")
        if (form.classList.contains("was-validated")) form.classList.remove('was-validated')
    }

    const onDateChanged = e => {
        setDate(e.target.value)
    }
    const asyncGetData = async () => {
        setLoading(true)
        const data = await getCentersByPin(pin, formatDate(date));
        setData(data.sessions)
        setLoading(false)
    }

    const onSubmitPin = event => {
        event.preventDefault()
        let form = document.getElementById("form_002")
        if (!form.checkValidity()) {
            form.classList.add('was-validated')
        }
        else {
            asyncGetData()
        }
    }

    return (
        <form className="g-3 needs-validation" id="form_002" noValidate onSubmit={onSubmitPin}>
            <div className="input-group  mb-3">
                <span className="input-group-text bg-success text-light" style={{
                    borderRadius: "12px 0 0 12px"
                }}>Center ID</span>
                <input className="form-control" type="text" placeholder="Enter PIN" maxLength={6} minLength={6} aria-label="Enter PIN" aria-describedby="button-addon" value={id} onChange={onChange} required style={{
                    borderRadius: "0 12px 12px 0"
                }} />
                <div className="invalid-feedback">
                    Invalid Center ID!
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
CenterUtils.propTypes = {
    setData: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

const getCurrentDate = () => {
    return new Date().toISOString().slice(0, 10).split('-').reverse().join('-');
}

