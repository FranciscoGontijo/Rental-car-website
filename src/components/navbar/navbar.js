import React, { useState } from "react";
import { Link } from "react-router-dom";

import './navbar.css';

const NavigationBar = () => {

    return (
        <>
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src='#' alt="logo" className="logo" />
                </div>
                <button className="nav-bar-button">Nav icon</button>
                <ul className="nav-bar-link-list">
                    <li className="nav-link">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/models">Vehicle Models</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/testimonials">Testimonials</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/team">Our Team</Link>
                    </li>
                    <li className="nav-link">
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default NavigationBar;