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
<section className="text-gray-600 body-font">
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">District wise COVID-19 vaccination Details in <span className="text-bold">{state.toLocaleUpperCase()}</span> </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">You can find the Districtwise COVID-19 cases here. <br /> <em className='font-medium'>Data Source <a href="https://www.cowin.gov.in" className="text-decoration-none font-semibold text-indigo-500" target="_blank" rel="noopener noreferrer">CoWIN.gov.in, Government of India.</a></em></p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>
            <div className="container mx-auto mb-10 relative overflow-x-auto shadow-md sm:rounded-lg">
            {vaccine && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className='px-6 py-3'>No</th>
                        <th scope="col" className='px-6 py-3'>District</th>
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
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-600 cursor-pointer">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{index}</th>
                                <td className='font-medium text-gray-900'>{e.district_name}</td>
                                <td className='text-center text-gray-900'>{e.total}</td>
                                <td className="text-center text-orange-500">{e.partial_vaccinated}</td>
                                <td className="text-center text-green-500">{e.totally_vaccinated}</td>
                                <td className="text-center font-bold">{e.today}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
            <div className="text-end bree-serif"></div>

        </div>
        </section>
    )

}
