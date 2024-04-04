import { useEffect, useRef, useState } from 'react'
import proImg from "../../assets/product.jpg"
import { useDispatch } from 'react-redux'
import { removeItem } from "../../pages/Cart/cartSlice"
import { addSubTotal, removeSubTotal } from "../../pages/Cart/cartTotal"
import "./cartitem.css"

function CartItem({ product }) {

    const dispatch = useDispatch()

    let [productCartCount, setProductCartCount] = useState(1)
    let [productSubtotal, setProductSubtotal] = useState(product.price)




    function handleCartCount(e) {

        if (e.target.innerHTML === "+" && productCartCount < 9) {

            setProductCartCount(++productCartCount)
            setProductSubtotal(product.price * productCartCount)
            dispatch(addSubTotal(productSubtotal))

        } else if (e.target.innerHTML === "-" && productCartCount > 0) {

            setProductCartCount(--productCartCount)
            setProductSubtotal(product.price * productCartCount)
            dispatch(removeSubTotal(productSubtotal))
        }
    }


    const removeFromCart = (product) => {
        dispatch(removeItem(product._id))
        dispatch(removeSubTotal(productSubtotal))
    };



    useEffect(() => {
        dispatch(addSubTotal(productSubtotal))
    }, [])


    return (
        <tr>
            <td className='d-flex align-items-center column-gap-2 align-middle'>
                <div>
                    <img className='img-fluid' src={proImg} alt="pro" />
                </div>
                <div className='d-flex flex-column'>
                    <small className='overflow-x-hidden'>{product.name}</small>
                    <small>Price: ₹{product.price}</small>
                    <button onClick={() => { removeFromCart(product) }}>remove</button>
                </div>
            </td>
            <td className='align-middle'>
                <button onClick={handleCartCount} type="button" className="btn btn-secondary btn-sm rounded-0">+</button>
                <span className='mx-1'>{productCartCount}</span>
                <button onClick={handleCartCount} type="button" className="btn btn-secondary btn-sm rounded-0">-</button>
            </td>
            <td className='align-middle'>₹ {productSubtotal}</td>
        </tr>
    )
}

export default CartItem