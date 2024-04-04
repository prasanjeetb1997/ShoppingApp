import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import CartItem from '../../components/CartItem/CartItem'
import { useSelector } from 'react-redux'
import "./cart.css"

function Cart() {


    const addedItems = useSelector((state) => state.cart.products)
    const grossTotal = useSelector((state) => state.cartTotal.grossTotal)


    return (
        <>
            <Header></Header>


            <div id='cart-page-container' className='container mt-sm-4 overflow-y-auto'>
                <table id='cart-table' className="table">
                    <thead className='position-sticky top-0'>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedItems.length > 0 ? addedItems.map((item) => {
                                return <CartItem key={item._id} product={item}></CartItem>
                            }) : <tr><td className='text-center' colSpan={3}><h3 style={{ marginTop: "27vh" }}>No Items Added To Cart!</h3></td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <div className='container'>
                <div id='checkout-box' className='table px-2 py-2 py-md-4 my-5 float-sm-end'>
                    <div className='d-flex w-100 justify-content-between mb-3 mb-md-4'>
                        <small>Gross Total</small>
                        <small>₹{grossTotal}</small>
                    </div>
                    <button type="button" className="btn">Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart