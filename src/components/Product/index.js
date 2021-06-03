// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import AirJordanOffWhite from '../../assets/aj1OffWhite.png';

// == Composant
const Product = ({ sneaker }) => {
	console.log("sneaker in product", sneaker);
	console.log("sneaker params", sneaker[1]);
	return (
	<div className="product"> 
<img src={AirJordanOffWhite} style={{width: '180px', height: '120px'}} />
			<h2>{sneaker[1].Brand} {sneaker[1].Quantity}</h2>
			<p>{sneaker[1].Price}€</p>
  </div>
)};

// == Export
export default Product;
