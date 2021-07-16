// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { Home, ShoppingCart, User} from 'react-feather';

// == Composant
const Connexion = ({connexionChangeMailFieldValue, connexionChangePasswordFieldValue, submitSignIn}) => {
	const handleConnexionChangeMail = (evt) => {
		connexionChangeMailFieldValue(evt.target.value);
	};
	const handleConnexionChangePassword = (evt) => {
		connexionChangePasswordFieldValue(evt.target.value);
	};
	const handleSignInSubmit = (evt) => {
		evt.preventDefault();
		submitSignIn();
	};
	return (
	<div>
		<NavLink to="/"><Home className="header-icon" size={34}/></NavLink>
		<h1>Connectez-vous!</h1>
		<div className="connexion">
			<form onSubmit={handleSignInSubmit}>
				<div className="connexion-Mail">
					<h2>Mail</h2>
					<input onChange={handleConnexionChangeMail}/>
					</div>
				<div className="connexion-Password">
					<h2>Password</h2>
					<input onChange={handleConnexionChangePassword}/>
				</div>
				<button>Submit</button>
			</form>
	</div>
		<NavLink to="/inscription">S'inscrire!</NavLink>
  </div>
)};

// == Export
export default Connexion;
