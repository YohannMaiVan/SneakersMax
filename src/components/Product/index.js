// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';

// == Composant
const Product = ({ sneaker }) => {
	console.log("sneakers props", sneaker);
	return (
		<Fragment>
			<div className="product"> 
				<img src={sneaker.Image} style={{width: '180px', height: '120px'}} />
				<h2>{sneaker.Brand} {sneaker.Quantity}</h2>
				<p>{sneaker.Price}€</p>
			</div>
		</Fragment>
)};

// == Export
export default Product;
