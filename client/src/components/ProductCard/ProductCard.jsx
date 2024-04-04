import './productcard.css'
import productImg from '../../assets/product.jpg'
import { useDispatch } from 'react-redux'
import { addItem } from "../../pages/Cart/cartSlice"

function ProductCard({ product }) {

    const dispatch = useDispatch()

    function addToCart(item) {
        dispatch(addItem(item))
    }
 
    return (
        <div className="card">
            <img src={productImg} className="card-img-top" alt="product" />
            <div className="card-body p-1 p-lg-3">
                <h5 className="card-title text-start fw-bolder">{product.name}</h5>
                <p className="card-text text-start text-secondary">
                    {product.brand}
                </p>
                <p className="card-subtitle text-start fw-bolder">
                    ₹ {product.price}
                </p>
            </div>
            <div className="card-footer p-0">
                <button onClick={() => { addToCart(product) }} className="btn btn-secondary rounded-0 w-100">
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard