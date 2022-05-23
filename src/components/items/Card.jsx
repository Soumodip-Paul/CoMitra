import React from 'react'

export const Card = ({ element }) => {

    const formatLine = (number) => {
        return (
            <b className={`ml-2 text-${number < 30 ? number < 15 ? "red" : "orange" : "green"}-500`}>{number} Dose{number > 1 && "s"} Left</b>
        )
    }

    const formatTime = (element) => {
        let currentTime = new Date().toTimeString().split(" ")[0]
        if ((element.from > currentTime) || (element.to < currentTime)) return <span className="text-red-500">
            {element.from.slice(0, 5)} to {element.to.slice(0, 5)}
        </span>
        else return <span className="text-green-500">
            {element.from.slice(0, 5)} to {element.to.slice(0, 5)}
        </span>
    }

    return (

        <div className="p-4 lg:w-1/2 w-full roboto">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{element.vaccine.toLocaleUpperCase()}</span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">
                    {element.allow_all_age ? "12 & above" : element.min_age_limit === 45 ? "45 & above" : "12 to 45"}
                </h2>
                <h1 className="text-xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 flex-col">
                    <b>{element.name}</b>
                    <span className="text-sm font-semibold mt-2">{formatTime(element)}</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-3 h-3" viewBox="0 0 48 48">
                            <path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
                        </svg>
                    </span>Center-ID: {element.center_id}
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-3 h-3" viewBox="0 0 48 48">
                            <path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
                        </svg>
                    </span>Pin: {element.pincode}
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-3 h-3" viewBox="0 0 48 48">
                            <path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
                        </svg>
                    </span>Available: {formatLine(element.available_capacity)}
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-3 h-3" viewBox="0 0 48 48">
                            <path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
                        </svg>
                    </span>Dose 1: {formatLine(element.available_capacity_dose1)}
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-3 h-3" viewBox="0 0 48 48">
                            <path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
                        </svg>
                    </span>Dose 2: {formatLine(element.available_capacity_dose2)}
                </p>
                <p className="flex items-start text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-3 h-3" viewBox="0 0 48 48">
                            <path fill='currentColor' xmlns="http://www.w3.org/2000/svg" d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z" />
                        </svg>
                    </span>Address: {element.address}, {element.block_name.toLocaleLowerCase() !== "not applicable" && element.block_name + ', '} {element.district_name},
                    Pin: {element.pincode}
                </p>
                <p className='text-xs text-gray-500 mb-1 text-center'>Available Time Slots</p>
                <div className="text-xs text-indigo-900 mb-3 flex flex-wrap justify-around w-full">
                    {element.slots.map((e, i) =>
                        <span key={i} className='bg-indigo-100 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-200 rounded  my-1 text-xs font-thin cursor-help '>{e.time}</span>
                    )}
                </div>
                <button className="flex items-center cursor-default justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">{element.fee_type.match(/free/i) ? "FREE" : `₹ ${element.fee}`}</button>
            </div>
        </div>
    )
}

// eslint-disable-next-line
const element =
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
        { "time": "10:30AM-11:30AM" },
        { "time": "11:30AM-12:30AM" },
        { "time": "12:30AM-13:30AM" },
        { "time": "13:30AM-15:30AM" }
    ]
}

export const CardGrid = ({ children }) => {
    return (

        <div className="flex flex-wrap -m-4">
            {children}
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