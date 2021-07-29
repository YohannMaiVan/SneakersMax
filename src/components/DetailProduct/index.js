import React from 'react';

import './styles.scss';
import Header from '../Header/index';

// == Composant
const DetailProduct = (sneaker) => {
	console.log('sneaker Detail product', sneaker);
	const selectedProduct = sneaker.location.state.sneaker;
	console.log('sneaker selectedProduct', selectedProduct);
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
					<button>Ajouter au panier</button>
				</div>
			</div>
		</>

)};

// == Export
export default DetailProduct;