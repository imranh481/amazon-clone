import React from 'react'
import '../styles/Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

  //get currennt state of basket from data layer
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className = "checkout">
      {/* Checkout Left */}
      <div className="checkout__left">
          <img className = "checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

          {/* If basket has nothing inside show me the below */}
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
            </div>
          ) : (
            <div>
              <h2 className = "checkout__title">Your Shopping Basket</h2>
              {/* List all checkout products */}
              {basket.map(item => (
                <CheckoutProduct 
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}  
                />
              ))}
            </div>
          )}
      </div>
      
      {/* Checkout Right */}
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
      
    </div>
  )
}

export default Checkout
