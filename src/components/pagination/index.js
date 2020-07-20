import React from 'react';
import { NavLink } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'onClick={() => paginate(number)}>
            <NavLink className='page-link'
                    activeclassName="active"
                    exact
                    to="/projects"
>
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
