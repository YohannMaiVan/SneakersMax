// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import { Home, ShoppingBag, User} from 'react-feather';
import mainLogo from '../../assets/sneakersMax.jpeg';
import { NavLink } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { disconnect } from '../../actions/connexion';
import Modal from '../../containers/Modal';

// == Composant
const Header = ({disconnect}) => {
	const disconnectOnClick = (event) => {
		event.preventDefault();
		console.log('testDisconnect');
		disconnect();
	}
	const [showModal, setModal] = useState(false);
	const showModalOnClick = () => {
		setModal(!showModal);
		console.log('SHOW MODAL', showModal)
	};
	const panier = useSelector(state => state.shoppingCart.shoppingCart);
	console.log("shoppingCart", panier);
	return (
  <div className="header">
	<NavLink to="/"><Home className="header-icon" size={34}/></NavLink>
	<div className="header__central">
		<div className="header__central-title">
		<NavLink to="/"><img src={mainLogo} style={{width: '80px', height: '60px'}}/></NavLink>
		</div>
		<ul className="header__central-brand">
			<li><NavLink to="/Nike">NIKE</NavLink></li>
			<li><NavLink to="/Jordan">JORDAN</NavLink></li>
			<li><NavLink to="/Adidas">ADIDAS</NavLink></li>
			<li><NavLink to="/Yeezy">YEEZY</NavLink></li>
			<li><NavLink to="/Reebok">REEBOK</NavLink></li>
		</ul>
	</div>
	{panier > 0 ? 
		<ShoppingBag onClick={showModalOnClick} className="header-icon-notEmpty" size={34}/>:
		<ShoppingBag className="header-icon" size={34}/>
	}
	<NavLink to="/connexion"><User className="header-icon" size={34}/></NavLink>
	<button onClick={disconnectOnClick}>Déconnexion</button>
	{showModal && (
		<Modal showModal={showModal}/>
	)}
  </div>

)};

const mapDispatchToProps = (dispatch) => ({
	disconnect: () => {
	  dispatch(disconnect());
	}
  });

// == Export
export default connect(null, mapDispatchToProps)(Header);
