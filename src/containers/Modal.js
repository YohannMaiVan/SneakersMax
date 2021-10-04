// == Import : npm
import { ShoppingCart } from 'react-feather';
import { connect } from 'react-redux';

// == Import : local
import Modal from 'src/components/Modal';

// Action Creators
import { saveShoppingCart } from '../actions/shoppingCart';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
	sneakers: state.products,
	sneakerCart: state.selectedProduct.sneaker
  });

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
	saveShoppingCart: (shoppingCart) => {
		dispatch(saveShoppingCart(shoppingCart));
	}
});
// const mapDispatchToProps = {};


// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Modal);