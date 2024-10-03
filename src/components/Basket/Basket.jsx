import React from 'react'
import "./Basket.scss"
import up from "../../assets/svg/up.svg"
import down from "../../assets/svg/down.svg"
import { useSelector, useDispatch } from 'react-redux'
import { incQuantity } from '../../redux/cart/cart.Slice'
import { decQuantity } from '../../redux/cart/cart.Slice'
import { Link } from 'react-router-dom'

function Basket() {
    const { list } = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    function checkPrice(p, d) {
        return p - p * (d / 100).toFixed(0);
    }

checkPrice();

let a =[11, 34, 54, 6, 5]

let b = a.reduce((sub, item) => sub + item.price ,  0)

console.log(b);




let result = list.reduce((sub, item) => sub + item.price * item.quantity, 0)


return (
    <div className='cart container'>
        <div className='cart-head'>
            Home / Cart
        </div>
        <div className='cart-top'>
            <div className='cart-products'>

                <div className='names'>
                    <h5>Product</h5>
                    <h5>Price </h5>
                    <h5>Quantity</h5>
                    <h5>Subtotal</h5>
                </div>
                <div>

                    {list?.map((data) => (

                        <div className='cart-product' key={data.id}>
                            <div className='cart-img'>
                                <img src={data.imageUrl} alt="" />
                                <h3>{data.title}</h3>
                            </div>
                            <p>${checkPrice(data.price, data.discount)}</p>
                            <div className='count'>
                                <h5>{data.quantity}</h5>
                                <div className='icons'>
                                    <img onClick={() => dispatch(incQuantity(data.id))} src={up} alt="" />
                                    <img onClick={() => dispatch(decQuantity(data.id))} src={down} alt="" />
                                </div>
                            </div>
                            <p className="p2">${data.price * data.quantity}</p>
                        </div>
                    )

                    )}
                </div>
            </div>
            <div className='buttons'>
                <Link to="/">
                <button className='btn1'>Return To Shop</button>
                </Link>
                <button className='btn2'>Update Cart</button>
            </div>
        </div>
        <div className='cart-bottom'>
            <div className='cart-left'>
                <div className='cart-con'>
                    <h6>Coupon Code</h6>
                </div>
                <button>Apply Coupon</button>
            </div>
            <div className='cart-right'>
                <h3>Cart Total</h3>
                <div className='price'>
                    <h5>Subtotal:</h5>
                    <h5>${result }</h5>
                </div>
                <div className='price'>
                    <h5>Shipping:</h5>
                    <h5>500</h5>
                </div>
                <div className='price'>
                    <h5>Total:</h5>
                    <h5>${result + 500}</h5>
                </div>
                <Link to="/checkOut">
                <button>Procees to checkout</button>
                </Link>
            </div>
        </div>
    </div>
)
}

export default Basket
