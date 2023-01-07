import React from 'react';
import { toast } from 'react-hot-toast';

import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, subTotal, shipping, Total, tax } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: 'addToCart',
      payload: { id },
    });
    dispatch({ type: 'calculatePrice' });
  };
  const decrement = (id) => {
    dispatch({
      type: 'decrement',
      payload: id,
    });
    dispatch({ type: 'calculatePrice' });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: 'deleteFromCart',
      payload: id,
    });
    dispatch({
      type: 'calculatePrice',
    });
  };
  const handler = () => toast.success('Your order placed succcessfull ');
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              img={i.img}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>
            No items yet{' '}
            <Link style={{ font: 'bold' }} to={'/'}>
              {' '}
              &nbsp;&nbsp;&nbsp;Go to shopping
            </Link>
          </h1>
        )}
      </main>

      <aside>
        <h2>subtotal:{subTotal}</h2>
        <h2>shipping:{shipping}</h2>
        <h2>Tax:{tax}</h2>
        <h2>Total:{Total}</h2>
        {cartItems.length > 0 ? (
          <button to={'/successfull'} onClick={() => handler()} className="btn">
            Proceed to Checkout
          </button>
        ) : (
          ''
        )}
      </aside>
    </div>
  );
};

const CartItem = ({
  img,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <>
    <div className="cartItem">
      <img src={img} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  </>
);

export default Cart;
