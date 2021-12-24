import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LoginButton } from './Login'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark roboto-slab">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img width="32px" height="32px" className=" rounded-circle bg-light me-2" src="/favicon-32x32.png" alt="Co-Mitra" /> CoMitra</Link >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/pin">Pin</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/district">District</NavLink >
                        </li>
                         <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/download">Download</NavLink >
                        </li> 
                         <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink >
                        </li> 
                         <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/privacy">Privacy</NavLink >
                        </li> 
                         {/*<li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link >
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Action</Link ></li>
                                <li><Link className="dropdown-item" to="/">Another action</Link ></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Something else here</Link ></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled">Disabled</Link >
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                <LoginButton/>
                </div>
            </div>
        </nav>
    )
}
