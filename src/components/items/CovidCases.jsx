import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export const CovidCases = () => {
    const [cases, setCases] = useState(null)

	useEffect(() => {
		getCases()
	}, [])

	const getCases = async () => {
        let req = await fetch("https://www.mohfw.gov.in/data/datanew.json")
        let response = await req.json()
        let IndiaCases = response[response.length - 1]
        setCases(formatResult(IndiaCases))
	}

    return (
        cases && <>
            <h3 className="text-center pt-4 pb-2 fw-bold m-0" style={{background: '#d0d7de'}}>COVID-19 cases in India ( <span > <Link className="text-decoration-none" to="/cases">See StateWise List</Link> </span> ) </h3>
			<div className="py-lg-2 p-4 bree-serif mb-4 fs-6 d-flex flex-lg-row flex-column justify-content-md-around justify-content-center sticky-lg-top" style={{background: '#d0d7de'}}>
				<div className="text-center py-lg-0 py-2 text-info fs-5">{cases.cases} <br /> Total Cases</div>
				<div className="text-center py-lg-0 py-2 text-info fs-5">{cases.todayCases} <br /> Confirmed Today</div>
				<div className="text-center py-lg-0 py-2 text-danger fs-5">{cases.todayDeaths} <br /> Deaths Today</div>
				<div className="text-center py-lg-0 py-2 text-danger fs-5">{cases.deaths} <br /> Deaths</div>
				<div className="text-center py-lg-0 py-2 text-success fs-5">{cases.todayRecovered} <br /> Recovered Today</div>
				<div className="text-center py-lg-0 py-2 text-success fs-5">{cases.recovered} <br /> Recovered</div>
                <div className="text-center py-lg-0 py-2 text-warning fs-5">{cases.active} <br /> Active</div>
			</div>
        </>
    )
}

const formatResult = response => {
    return {
        active: response.new_active,
        todayActive: (response.new_active - response.active),
        cases: response.new_positive,
        todayCases: response.new_positive - response.positive,
        deaths: response.new_death,
        todayDeaths: response.new_death - response.death,
        recovered: response.new_cured,
        todayRecovered: response.new_cured - response.cured,
    }
}


export const CovidVaccine = () => {

    const [vaccine, setVaccine] = useState(null)

	useEffect(() => {
		getCases()
	}, [])

	const getCases = async () => {
        let req = await fetch("https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?date=" +( new Date().toISOString().slice(0,10)))
        let response = await req.json()
        setVaccine(response.topBlock.vaccination)
        console.log(response.topBlock.vaccination)
	}

    return (
        vaccine &&  <>
             <h3 className="text-center pt-4 pb-2 fw-bold m-0">COVID-19 Vaccination status in India ( <span > <Link className="text-decoration-none" to="/vaccines">See StateWise List</Link> </span> ) </h3>
			<div className="py-lg-2 p-4 bree-serif mb-4 fs-6 d-flex flex-lg-row flex-column justify-content-md-around justify-content-center">
				<div className="text-center py-lg-0 py-2 text-info fs-5">{vaccine.total} <br /> Total Vaccination</div>
				<div className="text-center py-lg-0 py-2 text-info fs-5">{vaccine.today} <br /> Vaccinated Today</div>
				<div className="text-center py-lg-0 py-2 text-danger fs-5">{vaccine.today_dose_one} <br /> First Dose</div>
				<div className="text-center py-lg-0 py-2 text-success fs-5">{vaccine.today_dose_two} <br /> Second Dose</div>
				<div className="text-center py-lg-0 py-2 text-danger fs-5">{vaccine.tot_dose_1} <br /> Total First Dose</div>
				<div className="text-center py-lg-0 py-2 text-success fs-5">{vaccine.tot_dose_2} <br /> Total Second</div>
                {/* <div className="text-center py-lg-0 py-2 text-warning fs-5">{cases.active} <br /> Active</div> */}
			</div>
        </>
    )
}

