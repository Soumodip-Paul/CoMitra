import { useState, useEffect } from 'react'
import { states, districts as mDistricts } from '../assets/js/states'
import { setDescription, setTitle } from '../items/MetaDirective'
import { fetchDistricts } from '../network/fetchData'

const _desc = "Find the vaccination centers near you using your State and District name"

export const DistrictUtils = ({ setData, setLoading, setSubmitClick }) => {

    const [stateId, setStateId] = useState(0)
    const [districts, setDistricts] = useState([])
    const [districtId, setDistrictId] = useState('0')
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    const onSubmitDistrict = event => {
        event.preventDefault()
        let form = document.getElementById("form_001")
        if (!form.checkValidity()) {
            form.classList.add('was-validated')
        }
        else {
            asyncGetData()
        }
    }
    const onChange = e => {
        let form = document.getElementById("form_001")
        if (form.classList.contains("was-validated")) form.classList.remove('was-validated')
        setStateId(e.target.value)
        if(e.target.value !== '0') setDistricts(mDistricts[e.target.value])
        else {
            setDistricts([])
            setDistrictId('0')
        }
    }

    const asyncGetData = async () => {
        setLoading(true)
        const data = await fetchDistricts(districtId, formatDate(date));
        setData(data.sessions)
        setLoading(false)
        setSubmitClick(1)
    }

    const onDateChanged = e => {
        // returns date in dd-mm-yyyy
        setDate(e.target.value)
    }
    useEffect(() => {
        setTitle(`Find using ${window.location.pathname.slice(1).toLocaleUpperCase()} | CoMitra`)
        setDescription(_desc)
        setSubmitClick(0)
    }, [setSubmitClick])
    return (
        <form className="g-3 needs-validation" id="form_001" noValidate onSubmit={onSubmitDistrict}>
                <div className="input-group  mb-3">
                    <span className="input-group-text bg-success text-light" style={{borderRadius: "12px 0 0 12px"}}>State</span>
                    <select className="form-select" aria-label="Default select example" value={stateId} onChange={onChange} style={{borderRadius: " 0 12px 12px 0"}}>
                    <option value={0}>Select a State</option>
                        {states.map(state => {return <option value={state.state_id} key={state.state_id}>
                            {state.state_name}
                        </option> })}
                    </select>
                </div>
                <div className="input-group  mb-3">
                    <span className="input-group-text bg-success text-light" style={{borderRadius: "12px 0  0 12px"}}>District</span>
                    <select className="form-select" aria-label="Default select example" value={districtId} onChange={e => {setDistrictId(e.target.value)}} style={{borderRadius: " 0 12px 12px 0"}}>
                        <option value={0} >Select a district</option>
                        { districts && districts.map(d => {return <option value={d.district_id} key={d.district_id}>
                            {d.district_name}
                        </option> })}
                    </select>
                </div>
                <div className="input-group  mb-3">
                    <span className="input-group-text bg-success text-light" style={{borderRadius: "12px 0  0 12px"}}>DATE</span>
                    <input className="form-control" type="date" name="date" id="date" value={date} onChange={onDateChanged} />

                    <button disabled={ districtId === '0' } className="btn btn-info text-light" type="submit" id="button-addon" style={{borderRadius: " 0 12px 12px 0"}}>Submit</button>
                </div>
        </form>
    )
}

const formatDate = date => {
    //converts date from dd-mm-yyyy to yyyy-mm-dd
    return date.split('-').reverse().join('-')
}
