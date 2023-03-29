import React from "react";

import './bookacar.css';

const BookACar = () => {
    return (
        <section className="book-a-car-container">
            <h2>Book a car</h2>
            <form>
                <div className="input-container">
                    <label><i className="fa-solid fa-car"></i>Select Your Car Type <b>*</b></label>
                    <select>
                        <option>Select your car type</option>
                        <option>Audi A1 S-Line</option>
                        <option>VW Golf 6</option>
                        <option>Toyota Camry</option>
                        <option>BMW 320 ModernLine</option>
                        <option>Mercedes-Benz GLK</option>
                        <option>VW Passat CC</option>
                    </select>
                </div>
                <div className="input-container">
                    <label><i className="fa-solid fa-location-dot"></i>Pick-up <b>*</b></label>
                    <select>
                        <option>Select pick up location</option>
                        <option>Sydney</option>
                        <option>Brisbane</option>
                        <option>Gold Coast</option>
                        <option>Byron Bay</option>
                        <option>New Castle</option>
                        <option>Melbourne</option>
                    </select>
                </div>
                <div className="input-container">
                    <label><i className="fa-solid fa-location-dot"></i>Drop-of <b>*</b></label>
                    <select>
                        <option>Select drop off location</option>
                        <option>Sydney</option>
                        <option>Brisbane</option>
                        <option>Gold Coast</option>
                        <option>Byron Bay</option>
                        <option>New Castle</option>
                        <option>Melbourne</option>
                    </select>
                </div>
                <div className="input-container">
                    <label for="pick-up-date"><i className="fa-regular fa-calendar-days"></i>Pick-up <b>*</b></label>
                    <input id="pick-up-date" type="date"></input>
                </div>
                <div className="input-container">
                    <label for="drop-of-date"><i className="fa-regular fa-calendar-days"></i>Drop-of <b>*</b></label>
                    <input id="drop-of-date" type="date"></input>
                </div>
                <button type="submit">Search</button>
            </form>
        </section>
    )
};

export default BookACar;