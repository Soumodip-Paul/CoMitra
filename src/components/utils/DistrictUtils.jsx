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

    // eslint-disable-next-line
    const i = 
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
    return (
        <form className="lg:sticky lg:top-4 lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col w-full" id="form_001" onSubmit={onSubmitDistrict}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Enter your details</h2>
            <div className="relative mb-4">
                <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                <select id="state" name="state" autoComplete="state-name" value={stateId} onChange={onChange} className="mt-1 block w-full py-2 px-3 border border-indigo-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value={0}>Select a State</option>
                {states.map(state => {return <option value={state.state_id} key={state.state_id}>
                            {state.state_name}
                        </option> })}
                  </select>
            </div>
            <div className="relative mb-4">
                <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
                <select id="district" name="district" autoComplete="district-name" value={districtId} onChange={e => {setDistrictId(e.target.value)}} className="mt-1 block w-full py-2 px-3 border border-indigo-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value={0}>Select a District</option>
                { districts && districts.map(d => {return <option value={d.district_id} key={d.district_id}>
                            {d.district_name}
                        </option> })}
                  </select>
            </div>
            <div className="relative mb-4">
                <label htmlFor="date" className="leading-7 text-sm text-gray-600">Date</label>
                <input type="date" name="date" id="date" value={date} onChange={onDateChanged}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3">Find the available vaccinations in your area using your State and District</p>
        </form>
    )
}

const formatDate = date => {
    //converts date from dd-mm-yyyy to yyyy-mm-dd
    return date.split('-').reverse().join('-')
}
