import './productcard.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="product" />
            <div className="card-body p-1 p-lg-3">
                <h5 className="card-title text-start fw-bolder">Galaxy S14 64gb 15inch</h5>
                <p className="card-text text-start text-secondary">
                    Samsung
                </p>
                <p className="card-subtitle text-start fw-bolder">
                   ₹ 50000
                </p>
            </div>
            <div className="card-footer p-0">
                <button className="btn btn-secondary rounded-0 w-100">
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard