import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Login } from './Login'

export const NavBar = () => {

    return (
        <header className="text-gray-500 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img width="32px" height="32px" className="rounded-full w-10 h-10" src="/favicon-32x32.png" alt="Co-Mitra" />
                    <span className="ml-3 text-xl">Comitra</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink exact to='/' activeClassName='text-indigo-600' className="mr-5 hover:text-gray-900">Home</NavLink>
                    <NavLink exact to='/pin' activeClassName='text-indigo-600' className="mr-5 hover:text-gray-900">Pin</NavLink>
                    <NavLink exact to='/district' activeClassName='text-indigo-600' className="mr-5 hover:text-gray-900">District</NavLink>
                    <NavLink exact to='/download' activeClassName='text-indigo-600' className="mr-5 hover:text-gray-900">Download</NavLink>
                </nav>
                <Login />
            </div>
        </header>
    )
}
