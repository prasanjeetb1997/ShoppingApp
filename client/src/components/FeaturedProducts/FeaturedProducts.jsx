import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import productImg from '../../assets/product.jpg'

function FeaturedProducts() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        console.log("mount")
        // Function to update windowWidth when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup: Remove event listener when the component is unmounted
        return () => {
            console.log("un-mount")
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <>

            {windowWidth < 768 && <div className="container text-center ">
                <div className="row mb-4">
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-2 px-sm-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
            </div>}


            {(windowWidth >= 768 && windowWidth < 992) && <div className="container text-center">
                <div className="row mb-5">
                    <div className="col px-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col px-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-3">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
            </div>}


            {windowWidth >= 992 && <div className="container text-center">
                <div className="row mb-5">
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                    <div className="col px-4">
                        <ProductCard image={productImg}></ProductCard>
                    </div>
                </div>
            </div>}

        </>

    )
}

export default FeaturedProducts