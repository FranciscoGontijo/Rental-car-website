import React, { useState } from "react";

import "./modelsdisplay.css"

const RentalFleet = () => {
    const [pickedCar, setPickedCar] = useState('audi');

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
                    <button onClick={() => setPickedCar('audi')}>Audi A1 S-Line</button>
                    <button onClick={() => setPickedCar('golf')}>VW Golf 6</button>
                    <button onClick={() => setPickedCar('camry')}>Toyota Camry</button>
                    <button onClick={() => setPickedCar('bmw')}>BMW 320 ModernLine</button>
                    <button onClick={() => setPickedCar('glk')}>Mercedes-Benz GLK</button>
                    <button onClick={() => setPickedCar('passat')}>VW Passat CC</button>
                </div>
                <div>
                    <div className="picked-car-images-container">
                        {pickedCar === 'audi' && <img src="#" className="picked-car-image" alt="Audi A1 S-Line image" />}
                        {pickedCar === 'golf' && <img src="#" className="picked-car-image" alt="VW Golf 6 image" />}
                        {pickedCar === 'camry' && <img src="#" className="picked-car-image" alt="Toyota Camry image" />}
                        {pickedCar === 'bmw' && <img src="#" className="picked-car-image" alt="BMW 320 ModernLine image" />}
                        {pickedCar === 'glk' && <img src="#" className="picked-car-image" alt="Mercedes-Benz GLK image" />}
                        {pickedCar === 'passat' && <img src="#" className="picked-car-image" alt="VW Passat CC image" />}
                    </div>
                    <div className="picked-car-description-container">
                    </div>
                </div>
            </div>
            <button>Reserve now</button>
        </section>
    )
};

export default RentalFleet;