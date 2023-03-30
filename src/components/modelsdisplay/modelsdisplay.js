import React, { useState } from "react";

import "./modelsdisplay.css";

//import images
import audiDisplaySrc from "../../assets/images/audi-a1-display.jpg";
import golfDisplaySrc from "../../assets/images/golf-6-display.jpg";
import camryDisplaySrc from "../../assets/images/toyota-camry-display.jpg";
import bmwDisplaySrc from "../../assets/images/bmw-320-display.jpg";
import glkDisplaySrc from "../../assets/images/mercedes-glk-display.jpg";
import passatDisplaySrc from "../../assets/images/vw-passat-display.jpg";

const RentalFleet = () => {
    const [pickedCar, setPickedCar] = useState('audi');
    const [price, setPrice] = useState('45');
    const [model, setModel] = useState('A1');
    const [mark, setMark] = useState('Audi')
    const [year, setYear] = useState('2012');
    const [doors, setDoors] = useState('4');
    const [ac, setAc] = useState('Yes');
    const [transmission, setTransmission] = useState('Manual');
    const [fuel, setFuel] = useState('Gasoline');

    const selectAudi = () => {
        setPickedCar('audi');
        setPrice('45');
        setModel('A1');
        setMark('Audi');
        setYear('2012');
        setDoors('4');
        setAc('Yes');
        setTransmission('Manual');
        setFuel('Gasoline');
    };

    const selectGolf = () => {
        setPickedCar('golf');
        setPrice('37');
        setModel('Golf 6');
        setMark('Volkswagen');
        setYear('2008');
        setDoors('4');
        setAc('Yes');
        setTransmission('Manual');
        setFuel('Diesel');
    };

    const selectCamry = () => {
        setPickedCar('camry');
        setPrice('30');
        setModel('Camry');
        setMark('Toyota');
        setYear('2006');
        setDoors('4');
        setAc('Yes');
        setTransmission('Automatic');
        setFuel('Hybrid');
    };

    const selectBMW = () => {
        setPickedCar('bmw');
        setPrice('35');
        setModel('320');
        setMark('BMW');
        setYear('2012');
        setDoors('4');
        setAc('Yes');
        setTransmission('Manual');
        setFuel('Diesel');
    };

    const selectGLK = () => {
        setPickedCar('glk');
        setPrice('50');
        setModel('GLK');
        setMark('Mercedes');
        setYear('2006');
        setDoors('4');
        setAc('Yes');
        setTransmission('Manual');
        setFuel('Diesel');
    };

    const selectPassat = () => {
        setPickedCar('passat');
        setPrice('25');
        setModel('Passat CC');
        setMark('Volkswagen');
        setYear('2008');
        setDoors('4');
        setAc('Yes');
        setTransmission('Automatic');
        setFuel('Gasoline');
    };

    //use state to choose between the cars
    return (
        <section className="home-page-rental-fleet-container">
            <div className="home-page-rental-fleet-banner">
                <h3>Vehicle Models</h3>
                <h2>Our rental fleet</h2>
                <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="home-page-rental-fleet-pick-a-car-container">
                <div className="home-page-rental-fleet-car-list">
                    <button className={pickedCar === 'audi' ? 'active select-car-button' : 'select-car-button'} onClick={selectAudi}>Audi A1 S-Line</button>
                    <button className={pickedCar === 'golf' ? 'active select-car-button' : 'select-car-button'} onClick={selectGolf}>VW Golf 6</button>
                    <button className={pickedCar === 'camry' ? 'active select-car-button' : 'select-car-button'} onClick={selectCamry}>Toyota Camry</button>
                    <button className={pickedCar === 'bmw' ? 'active select-car-button' : 'select-car-button'} onClick={selectBMW}>BMW 320 ModernLine</button>
                    <button className={pickedCar === 'glk' ? 'active select-car-button' : 'select-car-button'} onClick={selectGLK}>Mercedes-Benz GLK</button>
                    <button className={pickedCar === 'passat' ? 'active select-car-button' : 'select-car-button'} onClick={selectPassat}>VW Passat CC</button>
                </div>
                <div className="picked-car-images-container">
                    {pickedCar === 'audi' && <img src={audiDisplaySrc} className="picked-car-image" alt="Audi A1 S-Line" />}
                    {pickedCar === 'golf' && <img src={golfDisplaySrc} className="picked-car-image" alt="VW Golf 6" />}
                    {pickedCar === 'camry' && <img src={camryDisplaySrc} className="picked-car-image" alt="Toyota Camry" />}
                    {pickedCar === 'bmw' && <img src={bmwDisplaySrc} className="picked-car-image" alt="BMW 320 ModernLine" />}
                    {pickedCar === 'glk' && <img src={glkDisplaySrc} className="picked-car-image" alt="Mercedes-Benz GLK" />}
                    {pickedCar === 'passat' && <img src={passatDisplaySrc} className="picked-car-image" alt="VW Passat CC" />}
                </div>
                <div className="table-and-button">
                    <div className="table">
                        <div className="head"><span className="price-tag">${price}</span><span>/ rent per day</span></div>
                        <div className="row"><span className="span-left">Model</span><span>{model}</span></div>
                        <div className="row"><span className="span-left">Mark</span><span>{mark}</span></div>
                        <div className="row"><span className="span-left">Year</span><span>{year}</span></div>
                        <div className="row"><span className="span-left">Doors</span><span>{doors}</span></div>
                        <div className="row"><span className="span-left">AC</span><span>{ac}</span></div>
                        <div className="row"><span className="span-left">Transmission</span><span>{transmission}</span></div>
                        <div className="row"><span className="span-left">Fuel</span><span>{fuel}</span></div>
                    </div>
                    <button className="reserve-button">Reserve now</button>
                </div>
            </div>
        </section>
    )
};

export default RentalFleet;