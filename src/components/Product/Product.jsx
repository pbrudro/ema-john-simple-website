import React from 'react';
import './Product.css'

const Product = (props) => {
  const { img, name, seller, ratings, price ,id} = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add To Cart</button>
    </div>
  );
};

export default Product;