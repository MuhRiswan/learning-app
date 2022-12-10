import React from "react";
import { useState } from "react";
import logo from '../components/img/logo.png'
import { FaRegUser } from 'react-icons/fa'
import '../Responsive.css';
import { Link } from "react-router-dom";

function Navigation() {
    const [fix, setFix] = useState(false)

    function setFixed() {
        if(window.scrollY >= 10){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener('scroll', setFixed)

    return(
        <nav class={fix ? 'navbar fixed-top navbar-expand-lg bg-light shadow active' : 'navbar fixed-top navbar-expand-lg'}>
            <div class="container">
                <span class="navbar-brand fw-bold"><img src={logo} width="50" alt="" />Learning App</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/webinar">Webinar</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/podcast">Podcast</Link>
                        </li>
                        <li className="nav-login nav-item dropdown fw-bold fs-5">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarScrollingDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                            <FaRegUser />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-right p-2" aria-labelledby="navbarScrollingDropdown">
                                <li className="mb-2">
                                    <button className="dropdown-item">Profile</button>
                                </li>
                                <li>
                                    <button className="dropdown-item btn bg-danger button-logout">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;