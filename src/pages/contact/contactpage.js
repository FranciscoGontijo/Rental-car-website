import React from 'react';
import { Link } from "react-router-dom";

//Import Components
import ContactBanner from "../../components/contactbanner/contactbanner";
import Footer from '../../components/footer/footer';

//Import StyleSheet
import "./contactpage.css";


const ContactPage = () => {
    return (
        <section>
            <div className='banner-background-image'>
                <div className='page-banner'>
                    <h2>Contact</h2>
                    <div className='links-container'>
                        <Link className="link" to="/">Home</Link> / <Link className="link" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
            <div className='contact-form-and-text-container'>
                <div className='contact-text-container'>
                    <h2>Need additional infomation?</h2>
                    <p>A multifaceted professional skilled in multiple fields of research, 
                        development as well as a learning specialist. 
                        Over 15 years of experience.</p>   
                        <div className='contacts-container'>
                        <p><i className="fa-solid fa-phone"></i> (123)456-789</p>
                        <p><i className="fa-solid fa-envelope"></i> carretntal@carmail.com</p>
                        <p><i className="fa-solid fa-location-dot"></i> Sydney, Australia</p>
                        </div>             
                </div>
                <div className='form-container'>
                    <form>
                        <label>Full Name <b>*</b></label>
                        <input type="text" placeholder='E.g: "Joe Shmoe' />
                        <label>Email <b>*</b></label>
                        <input type="email" placeholder='youremail@example.com' />
                        <label>Tell us about it <b>*</b></label>
                        <textarea placeholder='Write here..' />
                        <button type="submit"><i className="fa-solid fa-envelope"></i> Send Message</button>
                    </form>
                </div>
            </div>
            <ContactBanner />
            <Footer />
        </section>
    )
};

export default ContactPage;