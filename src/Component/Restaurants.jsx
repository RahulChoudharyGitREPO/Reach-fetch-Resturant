// Restaurants.jsx
import React, { useState, useEffect } from 'react';
const axios = require('axios');
import LoadingIndicator from './LoadingIndicator';
import RestaurantCard from './RestaurantCard';
import Pagination from './Pagination';

const API_URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`;

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL, {
          params: {
            page: currentPage,
            limit: 10
          }
        });
        setRestaurants(response.data.data);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading && <LoadingIndicator />}
      {!loading && (
        <div>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              type={restaurant.type}
              image={restaurant.image}
              rating={restaurant.rating}
              number_of_votes={restaurant.number_of_votes}
              price_starts_from={restaurant.price_starts_from}
            />
          ))}
          <Pagination
            current={currentPage}
            onChange={handlePageChange}
            total={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default Restaurants;
