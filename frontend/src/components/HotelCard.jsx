import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css'; // Optional: Add styles for the card

const HotelCard = ({ name, location, price, rating, imageUrl }) => {
  return (
    <div className="hotel-card">
      
      <div className="hotel-card-content">
        <h2 className="hotel-card-title">{name}</h2>
        <p className="hotel-card-location">{location}</p>
        <p className="hotel-card-price">Price: ${price} per night</p>
        <p className="hotel-card-rating">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  
};

export default HotelCard;