import React, { useState } from 'react'
import { PageItem, PaginationContainer, TextPagination } from './PaginationStyled';

const Pagination = ({
    currentPage,
    setCurrentPage,
    productsPerPage,
    totalProducts,
  }) => {

    const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  console.log("totalPages")
  console.log(totalPages)

  console.log("porpagina")
  console.log(productsPerPage)
  // Limit the page Numbers shown
  const [pageNumberLimit] = useState(totalPages);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(totalPages);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // GO to next page
  const paginateNext = () => {

    console.log("next")
    console.log("next")
    console.log("limit")
    console.log(maxPageNumberLimit)
    console.log("actual")
    console.log(currentPage)
    // Show next set of pageNumbers
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // GO to prev page
  const paginatePrev = () => {
    // Show prev set of pageNumbers
    if ((currentPage - 1) >= 1 ) {
      setCurrentPage(currentPage - 1);
    }
  };

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
        <PageItem onClick={paginatePrev} className={
          currentPage === pageNumbers[0]
           ? 'hiddenItem' 
           : null}>

          Prev
        </PageItem>

        {pageNumbers.map((number) => {
            if (currentPage < maxPageNumberLimit + 1 && currentPage > minPageNumberLimit) {
            return (
                <PageItem
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? 'active' : null}
                >
                {number}
                </PageItem>
            );
            }
        })} 

        <PageItem onClick={paginateNext} className={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? 'hiddenItem'
            : null
        }>
  
            Next
        </PageItem>

        <TextPagination>
            <b className='page'>{`pag ${currentPage}`}</b>
            <span> de </span>
            <b>{`${Math.ceil(totalPages)}`}</b>
        </TextPagination>

    </PaginationContainer>


    
    )}

export default Pagination