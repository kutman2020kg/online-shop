import React, {useState} from 'react'
import "./CheckDetails.scss"
import galochka from "../../assets/svg/galochka.svg"
import cash from "../../assets/svg/cash.svg"
import visa from "../../assets/svg/visa.svg"
import master from "../../assets/svg/master.svg"
import fire from "../../assets/svg/fire.svg"
import ps5 from "../../assets/svg/ps5.svg"
import comp from "../../assets/svg/comp.svg"

function CheckDetails() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
  return (
    <div className='check container'>
      <div className='check-head'>
        Account / My Account / Product / View Cart / CheckOut
      </div>
      <div className='billing-details'>
        <div className='details-one'>
            <div className='inp1'>
            <h1>Billing Details</h1>
            <p>First Name</p>
            <input type="text" />
            </div>
            <div className='inp2'>
                <p>Company Name</p>
                <input type="text" />
            </div>
            <div className="inp3">
                <p>Street Address</p>
                <input type="text" />
            </div>
            <div className="inp4">
                <p>Apartment, floor, etc. (optional)</p>
                <input type="text" />
            </div>
            <div className="inp5">
                <p>Town/City</p>
                <input type="text" />
            </div>
            <div className="inp6">
                <p>Phone Number</p>
                <input type="text" />
            </div>
            <div className="inp7">
                <p>Email Address</p>
                <input type="email" />
            </div>
            <div className='inf'>
                <img src={galochka} alt="" />
                <h6>Save this information for faster check-out next time</h6>
            </div>
        </div>
        <div className="details-two">
            <div className="products">
                <div className='price-products'>
                    <img src={ps5} alt="" />
                    <h5>LCD Monitor</h5>
                    <p>$650</p>
                </div>
                <div className='price-products'>
                    <img src={comp} alt="" />
                    <h5>H1 Gamepad</h5>
                    <p>$1100</p>
                </div>
            </div>
            <div className="prices">
                <div>
                    <div className='result-prices'>
                        <h5>Subtotal:</h5>
                        <p>$1750</p>
                    </div>
                    <hr />
                    <div className='result-prices'>
                        <h5>Shipping:</h5>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='result-prices'>
                        <h5>Total:</h5>
                        <p>$1750</p>
                    </div>
                </div>
                <div className='oplata'>
                    <input type="radio" value="bank" checked={selectedOption === 'bank'} onChange={handleOptionChange} />
                    <h5>Bank</h5>
                    <img src={cash} alt="" />
                    <img src={visa} alt="" />
                    <img src={master} alt="" />
                    <img src={fire} alt="" />
                </div>
                <div className='oplata2'>
                    <input type="radio" value='cod' checked={selectedOption === 'cod'} onChange={handleOptionChange} />
                    <h5>Cash on delivery</h5>
                </div>
                <div className='bottom-b'>
                    <input type="text" placeholder='Coupon Code' />
                    <button>Apply Coupon</button>
                </div>
                <button className='but'>Place Order</button>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CheckDetails
