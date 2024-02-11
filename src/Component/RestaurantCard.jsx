// RestaurantCard.jsx
import React from 'react';
import './RestaurantCard.css';
const RestaurantCard = ({ name, type, image, rating, number_of_votes, price_starts_from }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' , padding: `50px 20px`,
  }} >
      <div id="restaurant-card"  style={{  borderRadius: '5px', justifyContent: 'space-around' }} >
      <img src={image} alt={name} data-testid="restaurant-card-image"   
      style={{  borderRadius: '5px', justifyContent: 'space-between' }}
      
      
      />
      <div data-testid="restaurant-card-name">{name}</div>
      <div data-testid="restaurant-card-type">{type}</div>
      <div data-testid="restaurant-card-rating">Rating: {rating}</div>
      <div data-testid="restaurant-card-votes">Votes: {number_of_votes}</div>
      <div data-testid="restaurant-card-price">Price starts from: {price_starts_from}</div>
      </div>


      <div id="restaurant-card" >
      <img src={image} alt={name} data-testid="restaurant-card-image"   
      style={{ backgroundColor: 'red', borderRadius: '5px' }}
      
      
      />
      <div data-testid="restaurant-card-name">{name}</div>
      <div data-testid="restaurant-card-type">{type}</div>
      <div data-testid="restaurant-card-rating">Rating: {rating}</div>
      <div data-testid="restaurant-card-votes">Votes: {number_of_votes}</div>
      <div data-testid="restaurant-card-price">Price starts from: {price_starts_from}</div>
      </div>


      <div id="restaurant-card" >
      <img src={image} alt={name} data-testid="restaurant-card-image"   
      style={{ backgroundColor: 'red', borderRadius: '5px' }}
      
      
      />
      <div data-testid="restaurant-card-name">{name}</div>
      <div data-testid="restaurant-card-type">{type}</div>
      <div data-testid="restaurant-card-rating">Rating: {rating}</div>
      <div data-testid="restaurant-card-votes">Votes: {number_of_votes}</div>
      <div data-testid="restaurant-card-price">Price starts from: {price_starts_from}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
