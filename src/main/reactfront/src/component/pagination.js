// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import 'assist/css/pagination.css';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div className='w-full'>
    <ReactPaginate
      pageCount={200}
      onPageChange={onPageChange}
      containerClassName="pagination text-center"
      pageClassName="mx-2 rounded text-center w-10 text-xl "
      activeClassName="bg-white text-black mx-2"
      previousLabel="◀"
      nextLabel="▶"
      breakLabel={'...'} // 추가
      breakClassName={'break-me'} // 추가
      marginPagesDisplayed={1}
      pageRangeDisplayed={8}
    />
    </div>
  );
};

export default Pagination;
