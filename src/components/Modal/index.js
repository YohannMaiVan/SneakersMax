// == Import npm
import React, { Fragment, useEffect } from 'react';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Modal = ({ showModal, sneakers, pageProduct, saveShoppingCart }) => {
	console.log("page product", pageProduct);
	console.log("SHOWMODAL", showModal);
	console.log("state products", sneakers);
	useEffect(() => {
		console.log('test');
		saveShoppingCart(pageProduct);
	  }, []);
	return (
			<div className="modal">
				<h2>PANIER</h2>
					<h3>Modèle:</h3>
					<h3>Prix:</h3>
					<div>
						Livraison: Gratuite<br/>
						Total:
					</div>

			</div>
)};

// == Export
export default Modal;
