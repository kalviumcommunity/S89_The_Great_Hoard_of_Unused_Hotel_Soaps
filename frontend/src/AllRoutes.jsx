import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import HomePage from './HomePage';
import HotelList from './HotelList'; // Import the HotelList component
import AddEntityPage from './components/AddEntityPage'; // Import the AddEntityPage component
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/hotels" element={<HotelList />} /> {/* Add route for hotel cards */}
      <Route path="/add-entity" element={<AddEntityPage />} />
    </Routes>
  );
}

export default AllRoutes;