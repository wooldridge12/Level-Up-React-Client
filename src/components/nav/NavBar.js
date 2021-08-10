import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <img className="logo-image" src="https://www.pinclipart.com/picdir/middle/39-392368_school-border-cute-monsters-monster-party-art-for.png"></img>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Games</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
            </li>

            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
