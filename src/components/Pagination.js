import React, { useState } from "react";
// import PropTypes from "prop-types";

function Pagination({ itemPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="active">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
