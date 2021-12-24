import React, { useState, useEffect } from 'react'
import { CardGrid, CardGridItem } from '../items/Card'
import { PinUtils } from '../utils/PinUtils'
import { Switch, Route } from 'react-router-dom'
import { DistrictUtils } from '../utils/DistrictUtils'

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


    const loadSessions = () => {
        let activeSessions = filter(sessions)
        if (activeSessions.length !== 0) {
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
        <div className="row w-100 roboto-slab">
            <div className="col-md-4">
                <div className="media-sticky p-0 m-0">
                    <div className="container pt-4 ">
                        <Switch>
                            <Route exact path="/pin">
                                <PinUtils setData={setSessions} setLoading={setLoading} setSubmitClick={setSubmitClick} />
                            </Route>
                            <Route exact path="/district">
                                <DistrictUtils setData={setSessions} setLoading={setLoading} setSubmitClick={setSubmitClick} />
                            </Route>
                        </Switch>
                    </div>
                    {sessions.length !== 0 && <div className="container">
                        <div className="input-group  mb-3">
                            {/* <span className="input-group-text bg-success text-light" style={{
                                            borderRadius: "12px 0 0 12px"
                                        }}>Search:</span> */}
                            <input style={{
                                borderRadius: "12px 0 0 12px"
                            }} id="searchVC" className="form-control" type="text" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon" value={search} onChange={e => setSearch(e.target.value)} />
                            <span className="input-group-text bg-success text-light" style={{
                                borderRadius: "0 12px 12px 0"
                            }}>CTRL + /</span>
                        </div>
                        <span className="text-light bg-success px-3 py-1 btn rounded-pill roboto-slab">Filter : </span>
                        <div className="btn-group mx-0 my-1">
                            <input type="checkbox" className="btn-check" id="dose1Button" checked={dose1Filter} onChange={e => setDose1Filter(!dose1Filter)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="dose1Button">Does 1</label>
                            <input type="checkbox" className="btn-check" id="dose2Button" checked={dose2Filter} onChange={e => setDose2Filter(!dose2Filter)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="dose2Button">Does 2</label>
                        </div>
                        <div className="btn-group mx-0 my-1">
                            <input type="checkbox" className="btn-check" id="freeFilter" checked={free} onChange={e => setFree(!free)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="freeFilter">Free</label>
                            <input type="checkbox" className="btn-check" id="paidFilter" checked={paid} onChange={e => setPaid(!paid)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="paidFilter">Paid</label>
                        </div>
                        <div className="btn-group mx-0 my-1">
                            <input type="checkbox" className="btn-check" id="age18filter" checked={_18to45} onChange={e => set_18to45(!_18to45)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="age18filter">18-45</label>
                            <input type="checkbox" className="btn-check" id="age45filter" checked={_45andAbove} onChange={e => set_45andAbove(!_45andAbove)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="age45filter">45 &amp; above </label>
                            <input type="checkbox" className="btn-check" id="allAge" checked={allAgeGroup} onChange={e => setAllAgeGroup(!allAgeGroup)} autoComplete="off" />
                            <label className="no-hover btn btn-outline-success rounded-pill px-3 py-1 mx-1" htmlFor="allAge">All Age</label>
                        </div>
                    </div>}
                </div>
            </div>
            <div className="col-md-8">
                {loading ?
                    <>
                        <div className=" d-flex flex-column justify-content-center align-items-center" style={{ width: "100%", minHeight: "40vh" }}>
                            <div className="spinner-border text-info" role="status" >
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>
                    : sessions.length !== 0 ?
                        <>
                            <div className="mt-3 fw-bold text-center text-success">
                                {filter(sessions).length !== 0 && `Total ${filter(sessions).length} vaccination centers are available`}
                            </div>
                            {loadSessions()}
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
        );
    }

const createCards = e => {
    return (
        <CardGridItem key={e.session_id} element={e} />
    )
}
