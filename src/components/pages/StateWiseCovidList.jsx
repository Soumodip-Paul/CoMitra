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
        <tr key={index}>
            <th scope="row">{index}</th>
            <td>{cases.name}</td>
            <td>{cases.cases}</td>
            <td>{cases.active}</td>
            <td>{cases.deaths}</td>
            <td>{cases.recovered}</td>
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
        <div className="table-responsive container">
            <h3 className="roboto mx-2 mt-4">State Wise COVID-19 cases in India</h3>
            <hr className=" mb-4"/>
            <p className="roboto">You can find the state wise COVID-19 cases here.
            </p>
            <table className="table table-striped table-hover roboto-slab table-borderless">
                <thead className="bg-info">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Active</th>
                        <th scope="col">Death</th>
                        <th scope="col">Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {cases.map((e, i) => { return setUpTableData(e, (i + 1) === cases.length ? "Total" : i + 1) })}
                </tbody>
            </table>
            <div className="text-end bree-serif"><em>Data Source <a href="http://www.mohfw.gov.in" className="text-decoration-none" target="_blank" rel="noopener noreferrer">Ministry of Health and Family Welfare, Government of India.</a> </em></div>
        </div>
    )
}

export const StateWiseCovidVaccine = () => {
    const [vaccine, setVaccine] = useState(null)
    const getCases = async () => {
        try {
            let req = await fetch("https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?date=" + new Date().toISOString().slice(0,10))
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
        <div className="table-responsive container">
            <h3 className="roboto mx-2 mt-4">State Wise COVID-19 Vaccination Details in India</h3>
            <hr className=" mb-4"/>
            <p className="roboto">You can find the state wise COVID-19 vaccination details here.
            To view the detailed list  of districts of the State click on the State Name.
            </p>
            <table className="table table-striped table-hover roboto-slab table-borderless">
                <thead className="bg-info">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">State</th>
                        <th scope="col">Total</th>
                        <th scope="col">Partially Vaccinated</th>
                        <th scope="col">Totally Vaccinated</th>
                        <th scope="col">Today</th>
                    </tr>
                </thead>
                <tbody>
                    {vaccine.map((e,i) => {
                        let index = i + 1;
                        return(
                            <tr key={index} style={{cursor: 'pointer'}} onClick={el => {
                                document.getElementById('__link__'+index).click()
                            }}>
                                <th scope="row">{index}</th>
                                <td><Link id={"__link__"+ index} className="text-decoration-none text-dark" to={`/vaccines/${e.id}/${e.state_name}`}>{e.state_name}</Link></td>
                                <td>{e.total}</td>
                                <td>{e.partial_vaccinated}</td>
                                <td>{e.totally_vaccinated}</td>
                                <td>{e.today}</td>
                            </tr> 
                        )                       
                    })}
                </tbody>
            </table>
            <div className="text-end bree-serif"><em>Data Source <a href="https://www.cowin.gov.in" className="text-decoration-none" target="_blank" rel="noopener noreferrer">CoWIN.gov.in, Government of India.</a> </em></div>
           
        </div>   
    )
}