import React from 'react';
import img1 from '../assets/mac.jpg';
import img2 from '../assets/shoes.jpg';
import img3 from '../assets/watch.jpg';
import img4 from '../assets/coke.jpg';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const Home = () => {
  const productList = [
    { name: 'MI  TV', price: 12000, img: img1, id: 'asdfg1234sdfg' },
    { name: 'Black shoes', price: 120, img: img2, id: 'akjhgfd8765432' },
    {
      name: ' Smartwatch',
      price: 1200,
      img: img3,
      id: 'akjh234gfd8765432',
    },
    { name: 'Coco-cola', price: 1200, img: img4, id: 'akjhgfd568765432' },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    toast.success('added to cart');
    dispatch({ type: 'calculatePrice' });
    dispatch({ type: 'addToCart', payload: options });
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          id={i.id}
          handler={addToCartHandler}
          img={i.img}
          name={i.name}
          price={i.price}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, img }) => (
  <div className="productCard">
    <img src={img} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, img })}>
      {' '}
      Add to Cart
    </button>
  </div>
);

export default Home;
