import { useEffect, useState } from 'react'
import { setDescription, setTitle } from '../items/MetaDirective'
import { Link } from 'react-router-dom'

const formatResult = response => {
    return {
        name: response.state_name === "" ? 'India' : response.state_name,
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

const setUpTableData = (cases, index) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-600" key={index}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{index}</th>
            <td className='font-medium text-gray-900'>{cases.name}</td>
            <td className='text-center'>{cases.cases}</td>
            <td className='text-center'>{cases.active}</td>
            <td className='text-center'>{cases.deaths}</td>
            <td className='text-center'>{cases.recovered}</td>
        </tr>
    )
}

const _desc = "The Sate wise Covid 19 details (Source: www.mohfw.gov.in) "
const title = "Covid 19 cases list | CoMitra"
const _desc2 = "The Sate wise Covid 19 vaccination details (Source: www.cowin.gov.in) "
const title2 = "Covid 19 Vaccine list | CoMitra"

export const StateWiseCovidList = () => {
    const [cases, setCases] = useState(null)
    const getCases = async () => {
        try {
            let req = await fetch("https://www.mohfw.gov.in/data/datanew.json")
            let response = await req.json()
            let covidCases = []
            response.forEach(e => {
                covidCases.push(formatResult(e))
            })
            setCases(covidCases)
        }
        catch (error) {
            setCases(null)
        }
    }

    useEffect(() => {
        setTitle(title)
        setDescription(_desc)
        getCases()
    }, [])

    return (
        cases &&
        <section className="text-gray-600 body-font">
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">State Wise COVID-19 cases in India</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">You can find the state wise COVID-19 cases here. <br /> <em className='italic font-semibold text-indigo-500'>Data Source <a href="http://www.mohfw.gov.in" className="text-decoration-none" target="_blank" rel="noopener noreferrer">Ministry of Health and Family Welfare, Government of India.</a> </em></p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className="container mx-auto mb-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className='px-6 py-3'>No</th>
                            <th scope="col" className='px-6 py-3'>State</th>
                            <th scope="col" className='px-6 py-3 text-center'>Confirmed</th>
                            <th scope="col" className='px-6 py-3 text-center'>Active</th>
                            <th scope="col" className='px-6 py-3 text-center'>Death</th>
                            <th scope="col" className='px-6 py-3 text-center'>Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases.map((e, i) => { return setUpTableData(e, (i + 1) === cases.length ? "Total" : i + 1) })}
                    </tbody>
                </table>
            </div>
        </ section>
    )
}

export const StateWiseCovidVaccine = () => {
    const [vaccine, setVaccine] = useState(null)
    const getCases = async () => {
        try {
            let req = await fetch("https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?date=" + new Date().toISOString().slice(0, 10))
            let response = await req.json()
            setVaccine(response.getBeneficiariesGroupBy)
        }
        catch (error) {
            setVaccine(null)
        }
    }

    useEffect(() => {
        setTitle(title2)
        setDescription(_desc2)
        getCases()
    }, [])

    return (
        vaccine &&
        <>
            <section className="text-gray-600 body-font">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">State Wise COVID-19 Vaccination Details in India</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">You can find the state wise COVID-19 vaccination details here.
                        To view the detailed list  of districts of the State click on the State Name. <br /> <em className='font-medium'>Data Source <a href="https://www.cowin.gov.in" className="text-decoration-none font-semibold text-indigo-500" target="_blank" rel="noopener noreferrer">CoWIN.gov.in, Government of India.</a></em></p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="container mx-auto mb-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className='px-6 py-3'>No</th>
                                <th scope="col" className='px-6 py-3'>State</th>
                                <th scope="col" className='px-6 py-3 text-center'>Total</th>
                                <th scope="col" className='px-6 py-3 text-center'>Partially Vaccinated</th>
                                <th scope="col" className='px-6 py-3 text-center'>Totally Vaccinated</th>
                                <th scope="col" className='px-6 py-3 text-center'>Today</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vaccine.map((e, i) => {
                                let index = i + 1;
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-600 cursor-pointer" key={index} onClick={el => {
                                        document.getElementById('__link__' + index).click()
                                    }}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{index}</th>
                                        <td className='font-medium text-gray-900'><Link id={"__link__" + index} className="text-decoration-none text-dark" to={`/vaccines/${e.id}/${e.state_name}`}>{e.state_name}</Link></td>
                                        <td className='text-center text-gray-900'>{e.total}</td>
                                        <td className='text-center text-orange-400'>{e.partial_vaccinated}</td>
                                        <td className='text-center text-green-400'>{e.totally_vaccinated}</td>
                                        <td className='text-center font-bold'>{e.today}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>

    )
}