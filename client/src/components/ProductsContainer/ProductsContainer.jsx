
import ProductCard from '../ProductCard/ProductCard'


function ProductsContainer({ fetchedProducts }) {


    return (
        <>
            <div className="container d-flex flex-wrap justify-content-center row-gap-3 column-gap-2 row-gap-md-4 column-gap-sm-3 column-gap-md-4 row-gap-lg-5 column-gap-xl-5">
                {
                    fetchedProducts.length > 0 ?
                        fetchedProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>) :
                        <h1>No Items Found !</h1>
                }
            </div>
        </>

    )
}

export default ProductsContainer