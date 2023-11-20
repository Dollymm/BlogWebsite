import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <li className={i + 1 === currentPage ? 'activePagination' : ''} key={i + 1}>
        <a href='#' onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </a>
      </li>
    ));
  };

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
      </li>
      <div className='flex gap-1'>{renderPaginationLinks()}</div>
      <li>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
