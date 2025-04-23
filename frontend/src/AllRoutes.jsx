import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import HomePage from './HomePage';
import HotelList from './HotelList'; // Import the HotelList component

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/hotels" element={<HotelList />} /> {/* Add route for hotel cards */}
    </Routes>
  );
}

export default AllRoutes;