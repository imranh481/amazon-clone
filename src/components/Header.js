import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from '../Firebase';

function Header() {
  //get currennt state of basket from data layer
  const [{user, basket}] = useStateValue();
  console.log(basket)

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className = "header">
      <Link to = "/">
        {/* logo on the left */}
        <img className = "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>

      {/* search box */}
      <div className="header__searchBox">
        <input className = "header__searchInput" type="text" />
        <SearchIcon className = "header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        <Link to = {!user && "/login"} className = "header__link">
            <div onClick = {login} className="header__option">
              <span className = "header__optionLineOne">Hello {user?.email}</span>
              <span className = "header__optionLineTwo">{user ? "Sign Out" : "Sign In"} </span>
            </div>
        </Link>

        <Link to = "/" className = "header__link">
            <div className="header__option">
              <span className = "header__optionLineOne">Returns</span>
              <span className = "header__optionLineTwo">& Orders</span>
            </div>
        </Link>

        <Link to = "/" className = "header__link">
            <div className="header__option">
              <span className = "header__optionLineOne">Your</span>
              <span className = "header__optionLineTwo">Prime</span>
            </div>
        </Link>
      
      {/* Basket icon with number */}
        <Link to = "/checkout" className = "header__link">
          <div className = "header__optionBasket">
            <ShoppingBasketIcon />
            <span className = "header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </nav>
  )
}

export default Header