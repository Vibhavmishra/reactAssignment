import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPages, page, handlePageChange }) => {
  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={handlePageChange}
      color="primary"
      className="pagination"
    />
  );
};

export default Pagination;
