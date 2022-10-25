import React from 'react'

export const Pagination = ({newsOnPage, newsNumber, changePage, currentPage}) => {
    const numOfArticles = [];

    for(let i = 1; i<= Math.ceil(newsNumber /newsOnPage); i++){
        numOfArticles.push(i)
    }
    
  return (
    
        <ul className='pages'>
            {numOfArticles.map(number => (
                <li key={number} className='page-item'>
                    <a id={currentPage === number ? "active" : undefined} onClick={() => changePage(number)} href='!#' className='page-link'> {number}</a>
                </li>
            ))}
        </ul>
    
  )
}
