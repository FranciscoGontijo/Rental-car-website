import React from 'react';
import { Link } from "react-router-dom";

//Import Components
import ContactBanner from '../../components/contactbanner/contactbanner';
import Footer from '../../components/footer/footer';

//import Stylesheet
import "./modelspage.css";

//import images
import audiDisplaySrc from "../../assets/images/audi-a1-display.jpg";
import golfDisplaySrc from "../../assets/images/golf-6-display.jpg";
import camryDisplaySrc from "../../assets/images/toyota-camry-display.jpg";
import bmwDisplaySrc from "../../assets/images/bmw-320-display.jpg";
import glkDisplaySrc from "../../assets/images/mercedes-glk-display.jpg";
import passatDisplaySrc from "../../assets/images/vw-passat-display.jpg";


const cars = [
    {
        name: 'Audi A1',
        brand: 'Audi',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: audiDisplaySrc,
        price: 45
    },
    {
        name: 'Golf 6',
        brand: 'Volkswagen',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: golfDisplaySrc,
        price: 37
    },
    {
        name: 'Camry',
        brand: 'Toyota',
        transmission: 'Automatic',
        fuel: 'Hybrid',
        imageSrc: camryDisplaySrc,
        price: 30
    },
    {
        name: 'BMW 320',
        brand: 'BMW',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: bmwDisplaySrc,
        price: 35
    },
    {
        name: 'GLK',
        brand: 'Mercedes',
        transmission: 'Manual',
        fuel: 'Diesel',
        imageSrc: glkDisplaySrc,
        price: 50
    },
    {
        name: 'Passat',
        brand: 'Volkswagen',
        transmission: 'Automatic',
        fuel: 'Gasoline',
        imageSrc: passatDisplaySrc,
        price: 25
    }
]

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
                {cars.map((car, index) => {
                    return (
                        <div className='model-box-container'>
                            <div className={`model-image img${index+1}`}></div>
                            <div className='model-description'>
                                <div className='car-name-rate column-left'>
                                    <p>{car.name}</p>
                                    <div class="rating">
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                        <span>&#9733;</span>
                                    </div>
                                </div>
                                <div className='car-price column-right'>
                                    <h4>${car.price}</h4>
                                    <p>per day</p>
                                </div>
                                <div className='car-brand column-left'>
                                    <i className="fa-solid fa-car-side"></i><span>{car.brand}</span>
                                </div>
                                <div className='car-quantity column-right'>
                                    <span>4/5<i className="fa-solid fa-car-side"></i></span>
                                </div>
                                <div className='car-gearbox-type column-left'>
                                    <span><i className="fa-solid fa-car-side"></i>{car.transmission}</span>
                                </div>
                                <div className='car-fuel-type column-right'>
                                    <span>{car.fuel}<i className="fa-solid fa-car-side"></i></span>
                                </div>
                            </div>
                            <div className='bar'></div>
                            <button className='book-ride-button'>Book Ride</button>
                        </div>
                    )
                })}
            </div>
            <ContactBanner />
            <Footer />
        </section>
    )
};

export default ModelsPage;