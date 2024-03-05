import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import bannerImg from '../../assets/banner.jpg'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

function Home() {
  return (
    <>
      <Header></Header>
      <main>
       <div className='mb-5'>
        <img className='img-fluid mb-md-5' src={bannerImg} alt="banner" />
       </div>
       <div>
        <h1 className='text-center fs-6 mb-3 mb-md-4 mb-xl-5'>Featured Products</h1>
       <FeaturedProducts></FeaturedProducts>
       </div>
      </main>
    </>
  )
}

export default Home