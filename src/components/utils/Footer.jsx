import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = ({className}) => {
    return (
        <footer className={`text-gray-600 body-font border-t-[1px] ${className}`}>
            <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                        <h2 className=" title-font font-2xl font-semibold text-gray-900 tracking-widest text-sm mb-3">PAGES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                            </li>
                            <li>
                                <Link to="/pin" className="text-gray-600 hover:text-gray-800">Pin</Link>
                            </li>
                            <li>
                                <Link to="/district" className="text-gray-600 hover:text-gray-800">District</Link>
                            </li>
                            <li>
                                <Link to="/download" className="text-gray-600 hover:text-gray-800">Download</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                        <h2 className=" title-font font-2xl font-semibold text-gray-900 tracking-widest text-sm mb-3">ABOUT</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-600 hover:text-gray-800">Terms and Conditions</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-100">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img width="32px" height="32px" className=" w-10 h-10 rounded-full" src="/favicon-32x32.png" alt="Co-Mitra" />
                <span className="ml-3 text-xl">CoMitra</span>
            </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2019&minus;2021 CoMitra by
                        <a href="https://github.com/Soumodip-Paul" className="text-indigo-600 hover:underline ml-1" rel="noopener noreferrer" target="_blank">Soumodip Paul</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href='https://facebook.com/' className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/soumodippaul6" className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a href='/' className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a href='/' className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}