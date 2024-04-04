import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap.css';
import "./pagination.css"


function Pagination({ productsCount, currentPageNo }) {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.round(productsCount / 12);

  // passing data to parent component i.e Products
  currentPageNo(currentPage)


  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages || 1}
      onPageChange={setCurrentPage}
    />
  )
}

export default Pagination