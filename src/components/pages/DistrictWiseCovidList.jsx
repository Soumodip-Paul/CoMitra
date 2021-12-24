import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { setTitle, setDescription } from '../items/MetaDirective'

const title2 = "District Wise Vaccination Details of "
const _desc2 = ""

export const DistrictWiseCovidList = () => {
    const { id, state } = useParams()
    const [vaccine, setVaccine] = useState(null)
    const getCases = async (id) => {
        try {
            let req = await fetch("https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?state_id=" + id + "&date=" + new Date().toISOString().slice(0, 10))
            let response = await req.json()
            setVaccine(response.getBeneficiariesGroupBy)
        }
        catch (error) {
            setVaccine(null)
        }
    }

    useEffect(() => {
        setTitle(title2 + state.toLocaleUpperCase())
        setDescription(_desc2)
        getCases(id)
    }, [id, state])

    return (

        <div className="table-responsive container">
            <h3 className="roboto mx-2 mt-4">District wise COVID-19 vaccination Details in <span className="fw-bold">{state.toLocaleUpperCase()}</span> </h3>
            <hr className=" mb-4" />
            <p className="roboto">
                Here is the District wise vaccination Details of <span className="fw-bold">{state.toLocaleUpperCase()}</span>.
            </p>
            {vaccine && <table className="table table-striped table-hover roboto table-borderless">
                <thead className="bg-info">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">District</th>
                        <th scope="col">Total</th>
                        <th scope="col">Partially Vaccinated</th>
                        <th scope="col">Totally Vaccinated</th>
                        <th scope="col">Today</th>
                    </tr>
                </thead>
                <tbody>
                    {vaccine.map((e, i) => {
                        let index = i + 1;
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{e.district_name}</td>
                                <td>{e.total}</td>
                                <td className="text-warning">{e.partial_vaccinated}</td>
                                <td className="text-success">{e.totally_vaccinated}</td>
                                <td className="text-success fw-bold">{e.today}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
            <div className="text-end bree-serif"><em>Data Source <a href="https://www.cowin.gov.in" className="text-decoration-none" target="_blank" rel="noopener noreferrer">CoWIN, Government of India.</a> </em></div>

        </div>
    )

}
