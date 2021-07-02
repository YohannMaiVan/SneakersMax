// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';
import { Home, ShoppingCart, User} from 'react-feather';
import { submitSignUp } from '../../actions/inscription';


// == Composant
const Inscription = ({changeMailFieldValue, changePasswordFieldValue, submitSignUp }) => {
	const handleChangeMail = (evt) => {
		changeMailFieldValue(evt.target.value);
	};
	const handleChangePassword = (evt) => {
		changePasswordFieldValue(evt.target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		submitSignUp();
	};
	return (
	<div>
		<NavLink to="/"><Home className="header-icon" size={34}/></NavLink>
		<h1>Inscrivez-vous!</h1>
		<div className="inscription">
			<form onSubmit={handleSubmit}>
				<div className="inscription-Mail">
					<h2>Mail</h2>
					<input onChange={handleChangeMail}/>
				</div>
				<div className="inscription-Password">
					<h2>Password</h2>
					<input type="password" onChange={handleChangePassword}/>
				</div>
				<button>Submit</button>
			</form>
		</div>
		<NavLink to="/connexion">Vous avez déjà un compte? Connectez-vous!</NavLink>
  </div>
)};

// == Export
export default Inscription;
