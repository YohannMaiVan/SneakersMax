// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import AirJordanOffWhite from '../../assets/aj1OffWhite.png';

// == Composant
const Product = ({ sneaker }) => {
	console.log("sneaker in product", sneaker);
	return (
	<div className="product"> 
<img src={AirJordanOffWhite} style={{width: '180px', height: '120px'}} />
			<h2>{sneaker.brand} {sneaker.quantity}</h2>
			<p>{sneaker.price}€</p>
  </div>
)};

// == Export
export default Product;
