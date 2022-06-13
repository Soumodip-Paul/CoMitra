import { encodeSHA256 } from "../encoding/sha256"

export async function validateOTP(OTP, txnId) {

    try {
        let otp = await encodeSHA256(OTP)
        let data = { otp: otp, txnId: txnId }
        let response = await fetch(
            'https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
        return response;

    } catch (e) {
        return null
    }
}


export const generateOTP = async (phoneNo) => {
    try {
        let data = {
            mobile: phoneNo
        }
        let response = await fetch(
            'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
        return response
    }
    catch (e) {
        return null
    }
}