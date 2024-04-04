import { useState, useEffect } from 'react';
import './products.css'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import Pagination from '../../components/Pagination/Pagination'

function Products() {


  const [fetchedData, setFetchedData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1)

  const [searchQuery, setSearchQuery] = useState(null)



  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const baseURL = "http://localhost:5000/api/v1/product/all";

        if (!searchQuery) {
          const response = await fetch(`${baseURL}?page=${currentPage}`);

          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          // Parse the response as JSON
          const jsonData = await response.json();

          setFetchedData(jsonData);

          // Set loading state to false
          setIsLoading(false);

        } else {

          const response = await fetch(`${baseURL}?page=${1}&key=${searchQuery}`);

          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          // Parse the response as JSON
          const jsonData = await response.json();

          setFetchedData(jsonData);

          // Set loading state to false
          setIsLoading(false);
        }

      } catch (error) {
        // Set error state if there's an error
        setError(error);
        // Set loading state to false
        setIsLoading(false);
      }
    };
    // Call fetchData function when the component mounts
    fetchData();
  }, [currentPage, searchQuery]);



  return (
    <>
      <Header></Header>
      <main>
        <div id='background-for-searchbar'>
          <SearchBar searchQuery={(data) => { setSearchQuery(data) }}></SearchBar>
        </div>
        {
          isLoading ? <h1>THe page is loading</h1> :
            error ? <p>Error: {error.message}</p> :
              <>
                <ProductsContainer fetchedProducts={fetchedData.products}></ProductsContainer>
                <Pagination currentPageNo={(pageNo) => { setCurrentPage(pageNo) }} productsCount={fetchedData.productsCount}></Pagination> </>
        }
      </main>
    </>
  )
}

export default Products