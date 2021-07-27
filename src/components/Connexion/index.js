// == Import npm
import React from 'react';
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

// == Import
import './styles.scss';
import { Home, ShoppingCart, User} from 'react-feather';
import { useSelector } from 'react-redux'

// == Composant
const Connexion = ({connexionChangeMailFieldValue, connexionChangePasswordFieldValue, submitSignIn}) => {
	const handleConnexionChangeMail = (evt) => {
		connexionChangeMailFieldValue(evt.target.value);
	};
	const handleConnexionChangePassword = (evt) => {
		connexionChangePasswordFieldValue(evt.target.value);
	};
	let history = useHistory();
	const handleSignInSubmit = (evt) => {
		evt.preventDefault();
		submitSignIn();
		history.push('/');
	};
	const token = useSelector(state => state.connexion.keyId);
	const email = useSelector(state => state.connexion.user.email);
	// localStorage.getItem('token');
	// localStorage.setItem('token', token);
	// useEffect(() => {
	// 	localStorage.setItem('token', token);
	//   }, [token]);
	console.log("TOKEN", token);
	console.log("EMAIL", email);
	return (
	<div>
		{token && (
			<NavLink to="/">Vous êtes déjà connecté { email }</NavLink>
		)}
		{!token && (<div>
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
		)}
  </div>
)};

// == Export
export default Connexion;
