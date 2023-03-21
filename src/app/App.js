import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

//Import components
import NavigationBar from '../components/navbar/navbar';
import HomePage from '../components/home/homepage';
import AboutPage from '../components/about/aboutpage';
import ModelsPage from '../components/vahicles/models';
import TestimonialsPage from '../components/testimonials/testimonials';
import OurTeamPage from '../components/team/ourteampage';
import ContactPage from '../components/contact/contactpage';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
