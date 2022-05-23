import { useState, useEffect } from 'react'
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
            <section className="text-gray-600 bg-indigo-50 body-font">
                <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">COVID-19 Cases in India</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            <Link className='mt-3 text-indigo-500 inline-flex items-center hover:underline' to={'/cases'}>Clich Here</Link> to see the full Statewise list of COVID-19 cases in India.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 lg:w-1/6 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{cases.cases}</h2>
                            <p className="leading-relaxed">Total cases</p>
                        </div>
                        <div className="p-4 md:w-1/3 lg:w-1/6 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{cases.todayCases}</h2>
                            <p className="leading-relaxed">Confirmed Today</p>
                        </div>
                        <div className="p-4 md:w-1/3 lg:w-1/6 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{cases.todayDeaths}</h2>
                            <p className="leading-relaxed">Deaths Today</p>
                        </div>
                        <div className="p-4 md:w-1/3 lg:w-1/6 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{cases.todayRecovered}</h2>
                            <p className="leading-relaxed">Recovered Today</p>
                        </div>
                        <div className="p-4 md:w-1/3 lg:w-1/6 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{cases.recovered}</h2>
                            <p className="leading-relaxed">Recovered</p>
                        </div>
                        <div className="p-4 md:w-1/3 lg:w-1/6 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{cases.active}</h2>
                            <p className="leading-relaxed">Active</p>
                        </div>
                    </div>
                </div>
            </section>
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
        let req = await fetch("https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?date=" + (new Date().toISOString().slice(0, 10)))
        let response = await req.json()
        setVaccine(response.topBlock.vaccination)
    }

    return (
        vaccine && <>
            <section className="text-gray-600 bg-indigo-50 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">COVID-19 Vaccination in India</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            <Link className='mt-3 text-indigo-500 inline-flex items-center hover:underline' to={'/vaccines'}>Clich Here</Link> to see the full Statewise and Districtwise list of COVID-19 vaccination details.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vaccine.total}</h2>
                            <p className="leading-relaxed">Total Vaccinations</p>
                        </div>
                        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vaccine.today}</h2>
                            <p className="leading-relaxed">Vaccinated Today</p>
                        </div>
                        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vaccine.today_dose_one}</h2>
                            <p className="leading-relaxed">First Dose</p>
                        </div>
                        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vaccine.today_dose_two}</h2>
                            <p className="leading-relaxed">Second Dose</p>
                        </div>
                        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vaccine.tot_dose_1}</h2>
                            <p className="leading-relaxed">Total First Dose</p>
                        </div>
                        <div className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{vaccine.tot_dose_2}</h2>
                            <p className="leading-relaxed">Total Second Dose</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

