import { useState, useEffect } from 'react';
import './home.css'
import Header from '../../components/Header/Header'
import bannerImg from '../../assets/banner.jpg'
import FeaturedProducts from '../../components/ProductsContainer/ProductsContainer'

function Home() {

  const [fetchedData, setFetchedData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);



  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/product/all`);

        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Parse the response as JSON
        const jsonData = await response.json();

        setFetchedData(jsonData);

        // Set loading state to false
        setIsLoading(false);

      } catch (error) {
        // Set error state if there's an error
        setError(error);
        // Set loading state to false
        setIsLoading(false);
      }
    };
    // Call fetchData function when the component mounts
    fetchData();
  }, []); 



  return (
    <>
      <Header></Header>
      <main>
        <div className='mb-5'>
          <img className='img-fluid mb-md-5' src={bannerImg} alt="banner" />
        </div>
        <div>
          {
            isLoading ? <h1>THe page is loading</h1> :
              error ? <p>Error: {error.message}</p> : <>
                <h1 className='text-center mb-3 mb-md-4 mb-xl-5'>Featured Products</h1>
                <FeaturedProducts fetchedProducts={fetchedData.products}></FeaturedProducts> </>
          }
        </div>
      </main>
    </>
  )
}

export default Home