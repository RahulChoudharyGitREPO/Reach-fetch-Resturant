// Pagination.jsx
import React from 'react';
import './paginationCard.css';

const Pagination = ({ current, onChange, total }) => {
  const handlePageChange = (page) => {
    onChange(page);
  };

  return (
    <div data-testid="page-container">
      {[...Array(total)].map((_, index) => (
        <button
          key={index + 1}
          data-testid={`page-${index + 1}`}
          className={current === index + 1 ? 'active' : ''}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
};

export default Pagination;
