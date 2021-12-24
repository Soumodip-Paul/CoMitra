let pinCode = "732122"

export const fetchData = async () => {
    try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pinCode}&date=09-09-2021`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        if (response.status === 200) return response.json()
        return { "sessions": [] }
    }
    catch (e) {
        return { "sessions": [] }
    }
}

export const getCentersByPin = async (pin, date) => {
    try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        pinCode = pin
        if (response.status === 200) return response.json()
        return { "sessions": [] }
    }
    catch (e) {
        return { "sessions": [] }
    }
}

export const findUsingLocation = async (location) => {
    let { lat, long } = location
    lat = Math.round(lat * 100) / 100
    long = Math.round(long * 100) / 100
    try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${long}`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        if (response.status === 200) return response.json()
        return { "sessions": [] }
    }
    catch (e) {
        return { "sessions": [] }
    }
}

export const fetchDistricts = async (district_id, date) => {
    try {
        const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`, {
            headers: {
                'Accept': 'application/json',
            }
        })
        if (response.status === 200) return response.json()
        return { "sessions": [] }
    } catch (error) {
        return { "sessions": [] }
    }
}
