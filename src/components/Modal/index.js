// == Import npm
import React, { Fragment, useEffect } from 'react';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Modal = ({ showModal, pageProduct, saveShoppingCart, sneakerCart }) => {
	useEffect(() => {
		saveShoppingCart(pageProduct);
	  }, []);
	  console.log("test sneakerCART", sneakerCart)
	return (
		sneakerCart.map((sneaker) => (
			<div className="modal">
				{console.log("sneaker iteration", sneaker)}
				<h2>PANIER</h2>
					<h3>Modèle: {sneaker.Model}</h3>
					<h3>Prix: {sneaker.Price}</h3>
					<div>
						Livraison: Gratuite<br/>
					</div>
			</div>
	))
		)};

// == Export
export default Modal;
