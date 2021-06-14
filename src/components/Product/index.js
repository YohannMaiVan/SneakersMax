// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';
import AirJordanOffWhite from '../../assets/aj1OffWhite.png';

// == Composant
const Product = ({ sneaker, searchTerm }) => {
	console.log("searchTerm", searchTerm);
	return (
		<Fragment>
			<div className="product"> 
				<img src={AirJordanOffWhite} style={{width: '180px', height: '120px'}} />
				<h2>{sneaker[1].Brand} {sneaker[1].Quantity}</h2>
				<p>{sneaker[1].Price}€</p>
			</div>
		</Fragment>
)};

// == Export
export default Product;
