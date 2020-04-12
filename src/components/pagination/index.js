import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagination  = ({postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(

<div className="col-md-12">
    <nav>

<ul className="pagination">

{pageNumbers.map(number => (

  <li className='page-item'><NavLink onClick={()=>paginate(number)} className='page-link' to="#">{number}</NavLink></li>
  
))}
  
  
  </ul>
</nav>
  </div>

    )
}



export default Pagination;