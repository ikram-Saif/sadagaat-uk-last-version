import React from 'react';
import { NavLink , Link } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  var Active = paginate === 1? ' active':''
  return (
    <React.Fragment>
    <nav aria-label="Page navigation" style = {{position:"absolute",bottom:'0%'}}> 
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} 
                  className={`page-item${number === 1 &&' active'}`}
                  onClick={() => paginate(number)} 
                  style = {{float:'left'}}>
            <Link className={(paginate === number ? 'active ' : '') + 'page-link'}
            >
              {number}
              
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </React.Fragment>
  );
};

export default Pagination;
