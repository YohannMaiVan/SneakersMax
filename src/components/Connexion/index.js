// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { Home, ShoppingCart, User} from 'react-feather';
import Inscription from '../../containers/Inscription';


// == Composant
const Connexion = () => {
	return (
	<div>
		<NavLink to="/"><Home className="header-icon" size={34}/></NavLink>
		<h1>Connectez-vous!</h1>
		<div className="connexion">
			<form>
				<div className="connexion-Mail">
					<h2>Mail</h2>
					<input />
					</div>
				<div className="connexion-Password">
					<h2>Password</h2>
					<input/>
				</div>
				<button>Submit</button>
			</form>
	</div>
		<NavLink to="/inscription">S'inscrire!</NavLink>
  </div>
)};

// == Export
export default Connexion;
