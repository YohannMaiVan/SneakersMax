import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addShoppingCart } from '../../actions/shoppingCart';
import { selectedProduct } from '../../actions/sneakers';

import './styles.scss';
import Header from '../Header/index';

// == Composant
const DetailProduct = (sneaker) => {
	const pageProduct = sneaker.location.state.sneaker;
	const panier = useSelector(state => state.shoppingCart);
	const dispatch = useDispatch();

	const addShoppingCartOnClick = (event) => {
		event.preventDefault();
		dispatch(addShoppingCart());
	}
	 useEffect(() => {
		dispatch(selectedProduct(pageProduct));
  }, []);
	return (
		<>
			<Header/>
			<div className="detailProduct"> 
				<div>
					<img src={pageProduct.Image} style={{width: '40vw', height: '30vw'}}></img>
				</div>
				<div className="detailProduct-info">
					<h2>Nom du modèle: {pageProduct.Model}</h2>
					<p>Prix: {pageProduct.Price}€</p>
					<p>Quantité: {pageProduct.Quantity}</p>
					<button onClick={addShoppingCartOnClick} >Ajouter au panier</button>
				</div>
			</div>
		</>

)};

// == Export
export default DetailProduct;