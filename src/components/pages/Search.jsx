import React, { useState, useEffect } from 'react'
import { Card, CardGrid } from '../items/Card'
import { PinUtils } from '../utils/PinUtils'
import { Switch, Route } from 'react-router-dom'
import { DistrictUtils } from '../utils/DistrictUtils'
import { showInfoAlert } from '../items/Toast'

export const Search = () => {
    const [sessions, setSessions] = useState([])
    const [submitClick, setSubmitClick] = useState(0)
    const [loading, setLoading] = useState(false)
    const [dose1Filter, setDose1Filter] = useState(false)
    const [dose2Filter, setDose2Filter] = useState(false)
    const [free, setFree] = useState(false)
    const [paid, setPaid] = useState(false)
    const [search, setSearch] = useState('')
    const [_18to45, set_18to45] = useState(false)
    const [_45andAbove, set_45andAbove] = useState(false)
    const [allAgeGroup, setAllAgeGroup] = useState(false)

    const clearAll = () => {
        showInfoAlert("Search Results Cleared")
        setSessions([])
        setSearch('')
        setDose1Filter(false)
        setDose2Filter(false)
        setAllAgeGroup(false)
        set_18to45(false)
        set_45andAbove(false)
        setFree(false)
        setPaid(false)
    }

    const replace = (text) => {
        return text.replace(/\s+/g, "")
    }

    const searchExpression = text => {
        return new RegExp(text.replace(/\s+/g, '').replace(/[°"§%()[\]{}=\\?´`'#<>|,;.:+_-]+/g, '.'), "ig")
    }

    const filter = sessions => sessions.filter(e => {
        return e.available_capacity !== 0 &&
            (
                (
                    !(dose1Filter && e.available_capacity_dose1 === 0) &&
                    !(dose2Filter && e.available_capacity_dose2 === 0)
                ) || (dose1Filter && dose2Filter)
            ) &&
            (
                (
                    !(free && e.fee_type.toLocaleLowerCase() !== "free") &&
                    !(paid && e.fee_type.toLocaleLowerCase() !== "paid")
                ) || (paid && free)
            ) &&
            (
                (
                    (!_18to45 || (e.min_age_limit === 18 && !e.allow_all_age)) &&
                    (!_45andAbove || (e.min_age_limit === 45 && !e.allow_all_age)) &&
                    !(allAgeGroup && !e.allow_all_age)
                )
                || (_18to45 && allAgeGroup && (e.allow_all_age || e.min_age_limit === 18))
                || (_45andAbove && allAgeGroup && e.min_age_limit === 45)
                || (_18to45 && _45andAbove && !e.allow_all_age)
                || (_18to45 && _45andAbove && allAgeGroup)
            ) &&
            (
                !(search.length !== 0 &&
                    !(
                        replace(e.name).search(searchExpression(search)) !== -1 ||
                        `${e.pincode}`.search(searchExpression(search)) !== -1 ||
                        replace(e.district_name).search(searchExpression(search)) !== -1 ||
                        replace(e.block_name).search(searchExpression(search)) !== -1 ||
                        replace(e.address).search(searchExpression(search)) !== -1
                    )
                )
            )
    })

    const DoseFilter = e => {
        setDose1Filter(e.target.value !== "0")
        setDose2Filter(e.target.value !== "1")
    }

    const PriceFilter = e => {
        setFree(e.target.value !== "1")
        setPaid(e.target.value !== "0")
    }

    const AgeFilter = e => {
        setAllAgeGroup(e.target.value === "-1")
        set_18to45(e.target.value === "0")
        set_45andAbove(e.target.value === "1")
    }

    const LoadSessions = () => {
        let activeSessions = filter(sessions)
        if (sessions.length !== 0) {
            return (

                <CardGrid>
                    {activeSessions.map(createCards)}
                </CardGrid>
            )
        }
        else {
            return (
                <div className="container mt-3">No Vaccination Centers Available</div>
            )
        }
    }


    useEffect(() => {
        window.onkeydown = e => {
            if (e.key === '/' && e.ctrlKey === true) {
                let searchVC = document.getElementById("searchVC")
                searchVC && searchVC.focus()
            }
        }
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 md:py-12 py-8 mx-auto flex flex-wrap items-start">
                <Switch>
                    <Route exact path="/pin">
                        <PinUtils setData={setSessions} setLoading={setLoading} setSubmitClick={setSubmitClick} />
                    </Route>
                    <Route exact path="/district">
                        <DistrictUtils setData={setSessions} setLoading={setLoading} setSubmitClick={setSubmitClick} />
                    </Route>
                </Switch>
                <div className="lg:w-3/5 w-full md:ml-auto mt-10 md:mt-0">
                    {loading ?
                        <>
                            <svg role="status" className="h-8 w-8 animate-spin mx-auto text-gray-200 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </>
                        : sessions.length !== 0 ?
                            <>
                                <section className="text-gray-600 body-font overflow-hidden">
                                    <div className="container px-5 py-8 mx-auto">
                                        <input type={'hidden'} className="text-red-500" />
                                        <input type={'hidden'} className="text-green-500" />
                                        <input type={'hidden'} className="text-orange-500" />
                                        <div className="flex flex-col text-center w-full mb-6">
                                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Vaccination Centers</h1>
                                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Total {filter(sessions).length} Available Vaccinations Centers near you. You can Search and filter your results</p>
                                        </div>
                                        <div className="flex w-full mx-auto px-8 space-x-0 sm:space-y-0 space-y-4 sm:px-0 items-end mb-2">
                                            <div className="relative flex-grow w-full">
                                                <input type="text" id="searchVC" name="searchVC" className="w-full bg-gray-100 bg-opacity-50 rounded-l-lg border-2 border-r-0 border-gray-300 focus:border-indigo-500 focus:bg-transparent  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:font-sans" placeholder='Search Here (Ctrl-K)' value={search} onChange={e => setSearch(e.target.value)} />
                                            </div>
                                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-r-lg text-lg" onClick={e => clearAll()}>Clear</button>
                                        </div>
                                        <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-12">
                                            <div className="relative flex-grow w-full">
                                                <label htmlFor="pricing" className="leading-7 text-sm text-gray-600">Pricing</label>
                                                <select id="pricing" name="pricing" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={PriceFilter}>
                                                    <option value={-1}>All</option>
                                                    <option value={0}>Free</option>
                                                    <option value={1}>Paid</option>
                                                </select>
                                            </div>
                                            <div className="relative flex-grow w-full">
                                                <label htmlFor="DoseNo" className="leading-7 text-sm text-gray-600">Dose</label>
                                                <select id="DoseNo" name="DoseNo" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={DoseFilter} >
                                                    <option value={-1}>All</option>
                                                    <option value={0}>Dose 1</option>
                                                    <option value={1}>Dose 2</option>
                                                </select>
                                            </div>
                                            <div className="relative flex-grow w-full">
                                                <label htmlFor="Age" className="leading-7 text-sm text-gray-600">Age</label>
                                                <select id="Age" name="Age" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={AgeFilter}>
                                                    <option value={-1}>All ages</option>
                                                    <option value={0}>18 to 45 year</option>
                                                    <option value={1}>45 and Above</option>

                                                </select>
                                            </div>
                                        </div>
                                        <LoadSessions />
                                    </div>
                                </section>
                            </>
                            : submitClick === 0 ?
                                <div className="container mt-3">Please enter {window.location.pathname === '/pin' ?
                                    "PIN Code of your area " : "Name of Your State and District "}
                                    to find vaccination centers
                                </div>
                                : <div className="container mt-3">No Vaccination Centers Available</div>
                    }
                </div>
            </div>
        </section>
    );
}

const createCards = e => {
    return (
        <Card key={e.session_id} element={e} />
    )
}
