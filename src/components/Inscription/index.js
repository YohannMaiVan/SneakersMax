// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { Home, ShoppingCart, User} from 'react-feather';


// == Composant
const Inscription = ({changeSignUpFieldValue}) => {
	return (
	<div>
		<NavLink to="/"><Home className="header-icon" size={34}/></NavLink>
		<h1>Inscrivez-vous!</h1>
		<div className="inscription">
			<form>
				<div className="inscription-Mail">
					<h2>Mail</h2>
					<input/>
				</div>
				<div className="inscription-Password">
					<h2>Password</h2>
					<input/>
				</div>
				<button>Submit</button>
			</form>
		</div>
		<NavLink to="/connexion">Vous avez déjà un compte? Connectez-vous!</NavLink>
  </div>
)};

// == Export
export default Inscription;
