import { useState, createContext } from 'react'
import { tokenLable } from '../assets/js/_config'

export const Auth = createContext({authToken: null,setAuthToken: null})

let sessionStorage = null

if(typeof(Storage) !== undefined) {
    sessionStorage = window.sessionStorage.getItem(tokenLable)
}

export const AuthContext = ({children}) => {
    const [authToken, setAuthToken] = useState(sessionStorage)
    return (
        <Auth.Provider value={{authToken,setAuthToken}}>
            {children}
        </Auth.Provider>
    )
}
