import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addShoppingCart } from '../../actions/shoppingCart';

import './styles.scss';
import Header from '../Header/index';

// == Composant
const DetailProduct = (sneaker) => {
	const selectedProduct = sneaker.location.state.sneaker;
	const panier = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	const addShoppingCartOnClick = (event) => {
		event.preventDefault();
		dispatch(addShoppingCart());
	}
	return (
		<>
			<Header/>
			<div className="detailProduct"> 
				<div>
					<img src={selectedProduct.Image} style={{width: '40vw', height: '30vw'}}></img>
				</div>
				<div className="detailProduct-info">
					<h2>Nom du modèle: {selectedProduct.Model}</h2>
					<p>Prix: {selectedProduct.Price}€</p>
					<p>Quantité: {selectedProduct.Quantity}</p>
					<button onClick={addShoppingCartOnClick} >Ajouter au panier</button>
				</div>
			</div>
		</>

)};

// == Export
export default DetailProduct;