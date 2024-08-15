// import React from 'react';
// import './Pagination.css';

// const Pagination = ({ currentPage, onPageChange, totalItems, itemsPerPage }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   return (
//     <div className="pagination">
//       <button onClick={() => onPageChange(Math.max(1, currentPage - 1))}>Previous</button>
//       <span>Page {currentPage} of {totalPages}</span>
//       <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>Next</button>
//     </div>
//   );
// };

// export default Pagination;
import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, onPageChange, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))}>Previous</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>Next</button>
    </div>
  );
};

export default Pagination;
