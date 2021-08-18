// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import { Home, ShoppingBag, User} from 'react-feather';
import mainLogo from '../../assets/sneakersMax.jpeg';
import { NavLink } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { disconnect } from '../../actions/connexion';

// == Composant
const Header = ({disconnect}) => {
	const disconnectOnClick = (event) => {
		event.preventDefault();
		console.log('testDisconnect');
		disconnect();
	}
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
		<ShoppingBag className="header-icon-notEmpty" size={34}/>:
		<ShoppingBag className="header-icon" size={34}/>
	}
	<NavLink to="/connexion"><User className="header-icon" size={34}/></NavLink>
	<button onClick={disconnectOnClick}>Déconnexion</button>
  </div>

)};

const mapDispatchToProps = (dispatch) => ({
	disconnect: () => {
	  dispatch(disconnect());
	}
  });

// == Export
export default connect(null, mapDispatchToProps)(Header);
