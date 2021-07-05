import React from 'react'
import '../styles/CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';
function CheckoutProduct({ id, title, image, price, rating }) {

  //get currennt state of basket from data layer
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //add item to basket
    dispatch ({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className = "checkoutProduct">
      <img className = "checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className = "checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
            <small>£</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {
              Array(rating)
              .fill()
              .map((_) => (
                <p><StarIcon className = "product__star"/></p>
              ))
            }
          </div>

          <button onClick = {removeFromBasket} >Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
