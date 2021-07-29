// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Product = ({ sneaker }) => {
	console.log("sneakers props", sneaker);
	return (
		<Fragment>
			<div className="product"> 
				<NavLink to={{
					pathname: '/DetailProduct',
					state: {sneaker}
				}}>
					<img src={sneaker.Image} style={{width: '180px', height: '120px'}} /></NavLink>
				<h2>{sneaker.Brand} {sneaker.Quantity}</h2>
				<p>{sneaker.Price}€</p>
			</div>
		</Fragment>
)};

// == Export
export default Product;
