import React from 'react'

export const Card = ({ element }) => {

    const formatLine = (number) => {
        return number < 30 ? number < 15 ? "danger" : "warning" : "success"
    }

    const formatTime = (element) => {
        let currentTime = new Date().toTimeString().split(" ")[0]
        if ((element.from > currentTime) || (element.to < currentTime)) return <span className="text-danger">
            {element.from.slice(0, 5)} to {element.to.slice(0, 5)}
        </span>
        else return <span className="text-success">
            {element.from.slice(0, 5)} to {element.to.slice(0, 5)}
        </span>
    }

    return (
        <div className="card text-start border-success mb-3" style={{ minWidth: '18rem' }}>
            <CardBadge>{element.fee_type}</CardBadge>
            <div className="card-header bg-success text-light">{element.allow_all_age ? "18 & above" : element.min_age_limit === 45 ?  "45 & above" : "18 to 45" }</div>
            <div className="card-body ">
                <h3 className="text-center card-title bree-serif">{element.name}</h3>
                {element.fee_type.toLocaleLowerCase() === "paid" && <p className="card-text text-danger text-center"><strong>Fee: {element.fee}</strong></p>}
                <p className="card-text fw-bold text-center">Open from {formatTime(element)}</p>
                <p className="card-text">
                    Center-ID: {element.center_id} <br />
                    Address: {element.address}, {element.block_name.toLocaleLowerCase() !== "not applicable" && element.block_name+', '} {element.district_name} <br />
                    Pin: {element.pincode} <br />
                    <strong className={`text-${formatLine(element.available_capacity)} roboto`}> Does Available: {element.available_capacity} <br /></strong>

                    <strong className={`text-${formatLine(element.available_capacity_dose1)} roboto`}>Dose 1: {element.available_capacity_dose1} left</strong> <br />

                    <strong className={`text-${formatLine(element.available_capacity_dose2)} roboto`}>Dose 2: {element.available_capacity_dose2} left</strong><br />
                    Slots:
                </p>
                <div className="row">
                {element.slots.map((e,i) =>{ return (
                    <div className="col-md-6" key={i}>
                    <button style={{fontSize: '13px'}} disabled={true} className="btn btn-outline-success my-1 rounded-pill">{e.time}</button>
                    </div>
                )})}
                </div>
            </div>
            <div className="card-footer text-center bg-success text-light"><span className="fw-bold roboto">{element.vaccine}</span></div>
        </div>
    )
}

// eslint-disable-next-line
const res =
{
    "center_id": 550839,
    "name": "Bedrabad RH",
    "address": "Bedrabad",
    "state_name": "West Bengal",
    "district_name": "Malda",
    "block_name": "KALIACHAK III",
    "pincode": 732210,
    "from": "10:30:00", 
    "to": "15:30:00",
    "lat": 24,
    "long": 87,
    "fee_type": "Free",
    "session_id": "26ba211c-3c59-452a-8d20-cba9cd46a3d8",
    "date": "17-09-2021",
    "available_capacity": 1,
    "available_capacity_dose1": 0,
    "available_capacity_dose2": 1,
    "fee": "0",
    "allow_all_age": false,
    "min_age_limit": 45,
    "vaccine": "COVISHIELD",
    "slots": [
        "10:30AM-11:30AM",
        "11:30AM-12:30PM",
        "12:30PM-01:30PM",
        "01:30PM-03:30PM"
    ]
}

export const CardGrid = ({ children }) => {
    return (
        <div className="container p-4">
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export const CardGridItem = ({ element }) => {
    return (
        <div className="col m-2">
            <Card element={element} />
        </div>
    )
}
export const CardBadge = ({ children }) => {
    return (
        <span className="position-absolute top-0 start-50 px-3 translate-middle badge rounded-pill bg-danger">
            {children}
        </span>
    )
}