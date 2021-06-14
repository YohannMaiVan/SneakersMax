// == Import : npm
import { connect } from 'react-redux';
import Inscription from 'src/components/Inscription';

// Action Creators
import { changeSignUpFieldValue } from '../actions/inscription';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
	mail: state.inscription.user.mail,
	password: state.inscription.user.password
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
	changeSignUpFieldValue: (field, value) => {
		dispatch(changeSignUpFieldValue(field, value));
	}
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Inscription);
