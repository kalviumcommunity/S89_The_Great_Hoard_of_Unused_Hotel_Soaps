import React from 'react';
import hotelData from './data/HotelData';
import HotelCard from './components/HotelCard';

const HotelList = () => {
  return (
    <div className="hotel-list">
      {hotelData.map((hotel) => (
        <HotelCard
          key={hotel.id}
          name={hotel.name}
          location={hotel.location}
          price={hotel.price}
          rating={hotel.rating}
          imageUrl={hotel.imageUrl}
        />
      ))}
    </div>
  );
};

export default HotelList;