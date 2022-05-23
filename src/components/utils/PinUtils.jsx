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
        <form className="lg:sticky lg:top-4 lg:w-2/6 bg-gray-100 rounded-lg p-8 flex flex-col w-full" id="form_001" onSubmit={onSubmitPin}>
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Enter your details</h2>
            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Pincode</label>
                <input type="text" placeholder="Enter PIN" pattern="[0-9]{6}" aria-label="Enter PIN" aria-describedby="button-addon" value={pin} onChange={onChange} required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Date</label>
                <input type="date" name="date" id="date" value={date} onChange={onDateChanged}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3">Find the available vaccinations in your area using your pincode</p>
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

