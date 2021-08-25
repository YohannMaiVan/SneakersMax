// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Modal = ({ showModal, sneakers }) => {
	console.log("SHOWMODAL", showModal);
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
