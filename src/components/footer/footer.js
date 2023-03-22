import React from "react";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-contact-container">
                <h3><span>CAR</span> Rental</h3>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <ul>
                    <li><i></i><h4>+61 0410280011</h4></li>
                    <li><i></i><h4>carrental@gmail.com</h4></li>
                    <li><p>Design by Francisco</p></li>
                </ul>
            </div>
            <div>
                <h2>COMPANY</h2>
                <h4>New York</h4>
                <h4>Carrers</h4>
                <h4>Mobile</h4>
                <h4>Blog</h4>
                <h4>How we work</h4>
            </div>
            <div className="footer-work-hours">
                <h2>WORKING HOURS</h2>
                <h4>Mon - Fri: 9:00AM - 9:00PM</h4>
                <h4>Sat: 9:00AM - 7:00PM</h4>
                <h4>Sun: Closed</h4>
            </div>
            <div className="footer-subscription">
                <h2>SUBSCRIPTION</h2>
                <h4>Subscribe your Email address for latest news & updates.</h4>
                <input type="email"/>
                <label for="email">Enter Email Address</label>
                <button type="submit">Submit</button>
            </div>
        </section>
    )
};

export default Footer;