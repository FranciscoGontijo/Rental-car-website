import React from 'react';
import { Link } from "react-router-dom";

//Import Components
import ContactBanner from '../../components/contactbanner/contactbanner';
import Footer from '../../components/footer/footer';

//import Stylesheet
import "./modelspage.css";

const ModelsPage = () => {
    return (
        <section>
            <div className='banner-background-image'>
                <div className='page-banner'>
                    <h2>Vehicle Models</h2>
                    <div className='links-container'>
                        <Link className="link" to="/">Home</Link> / <Link className="link" to="/about">Vehicle Models</Link>
                    </div>
                </div>
            </div>
            <div className='models-display-container'>
                <div className='model-box-container'>
                    <div className='model-image img1'></div>
                    <div className='model-description'>
                        <div className='car-name-rate column-left'>
                            <p>Audi A1</p>
                            <div class="rating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div className='car-price column-right'>
                            <h4>$45</h4>
                            <p>per day</p>
                        </div>
                        <div className='car-brand column-left'>
                        <i class="fa-solid fa-car-side"></i><span>Audi</span>
                        </div>
                        <div className='car-quantity column-right'>
                            <span>4/5<i class="fa-solid fa-car-side"></i></span>
                        </div>
                        <div className='car-gearbox-type column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Manual</span>
                        </div>
                        <div className='car-fuel-type column-right'>
                            <span>Diesel<i class="fa-solid fa-car-side"></i></span>
                        </div>
                    </div>
                    <div className='bar'></div>
                    <button className='book-ride-button'>Book Ride</button>
                </div>
                <div className='model-box-container'>
                    <div className='model-image img2'></div>
                    <div className='model-description'>
                        <div className='car-name-rate column-left'>
                            <p>Audi A1</p>
                            <div class="rating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div className='car-price column-right'>
                            <h4>$45</h4>
                            <p>per day</p>
                        </div>
                        <div className='car-brand column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Audi</span>
                        </div>
                        <div className='car-quantity column-right'>
                            <span>4/5<i class="fa-solid fa-car-side"></i></span>
                        </div>
                        <div className='car-gearbox-type column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Manual</span>
                        </div>
                        <div className='car-fuel-type column-right'>
                            <span>Diesel<i class="fa-solid fa-car-side"></i></span>
                        </div>
                    </div>
                    <div className='bar'></div>
                    <button className='book-ride-button'>Book Ride</button>
                </div>
                <div className='model-box-container'>
                    <div className='model-image img3'></div>
                    <div className='model-description'>
                        <div className='car-name-rate column-left'>
                            <p>Audi A1</p>
                            <div class="rating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div className='car-price column-right'>
                            <h4>$45</h4>
                            <p>per day</p>
                        </div>
                        <div className='car-brand column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Audi</span>
                        </div>
                        <div className='car-quantity column-right'>
                            <span>4/5<i class="fa-solid fa-car-side"></i></span>
                        </div>
                        <div className='car-gearbox-type column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Manual</span>
                        </div>
                        <div className='car-fuel-type column-right'>
                            <span>Diesel<i class="fa-solid fa-car-side"></i></span>
                        </div>
                    </div>
                    <div className='bar'></div>
                    <button className='book-ride-button'>Book Ride</button>
                </div>
                <div className='model-box-container'>
                    <div className='model-image img4'></div>
                    <div className='model-description'>
                        <div className='car-name-rate column-left'>
                            <p>Audi A1</p>
                            <div class="rating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div className='car-price column-right'>
                            <h4>$45</h4>
                            <p>per day</p>
                        </div>
                        <div className='car-brand column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Audi</span>
                        </div>
                        <div className='car-quantity column-right'>
                            <span>4/5<i class="fa-solid fa-car-side"></i></span>
                        </div>
                        <div className='car-gearbox-type column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Manual</span>
                        </div>
                        <div className='car-fuel-type column-right'>
                            <span>Diesel<i class="fa-solid fa-car-side"></i></span>
                        </div>
                    </div>
                    <div className='bar'></div>
                    <button className='book-ride-button'>Book Ride</button>
                </div>
                <div className='model-box-container'>
                    <div className='model-image img5'></div>
                    <div className='model-description'>
                        <div className='car-name-rate column-left'>
                            <p>Audi A1</p>
                            <div class="rating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div className='car-price column-right'>
                            <h4>$45</h4>
                            <p>per day</p>
                        </div>
                        <div className='car-brand column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Audi</span>
                        </div>
                        <div className='car-quantity column-right'>
                            <span>4/5<i class="fa-solid fa-car-side"></i></span>
                        </div>
                        <div className='car-gearbox-type column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Manual</span>
                        </div>
                        <div className='car-fuel-type column-right'>
                            <span>Diesel<i class="fa-solid fa-car-side"></i></span>
                        </div>
                    </div>
                    <div className='bar'></div>
                    <button className='book-ride-button'>Book Ride</button>
                </div>
                <div className='model-box-container'>
                    <div className='model-image img6'></div>
                    <div className='model-description'>
                        <div className='car-name-rate column-left'>
                            <p>Audi A1</p>
                            <div class="rating">
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                            </div>
                        </div>
                        <div className='car-price column-right'>
                            <h4>$45</h4>
                            <p>per day</p>
                        </div>
                        <div className='car-brand column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Audi</span>
                        </div>
                        <div className='car-quantity column-right'>
                            <span>4/5<i class="fa-solid fa-car-side"></i></span>
                        </div>
                        <div className='car-gearbox-type column-left'>
                            <span><i class="fa-solid fa-car-side"></i>Manual</span>
                        </div>
                        <div className='car-fuel-type column-right'>
                            <span>Diesel<i class="fa-solid fa-car-side"></i></span>
                        </div>
                    </div>
                    <div className='bar'></div>
                    <button className='book-ride-button'>Book Ride</button>
                </div>
            </div>
            <ContactBanner />
            <Footer/>
        </section>
    )
};

export default ModelsPage;