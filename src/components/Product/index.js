// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import AirJordanOffWhite from '../../assets/aj1OffWhite.png';

// == Composant
const Product = ({name, brand, colorway, price}) => {
	console.log(name);
	return (
	<div className="product">
	  <img src={AirJordanOffWhite} style={{width: '180px', height: '120px'}} />
	  <p>{brand}</p>
	  <h2>{name} {colorway}</h2>
	  <p>{price}€</p>
  </div>
)};

// == Export
export default Product;
