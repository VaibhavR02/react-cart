import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <Link to={'/'}>
        {' '}
        <h2>SIMPLE CART</h2>
      </Link>

      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>
          {' '}
          <FiShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
