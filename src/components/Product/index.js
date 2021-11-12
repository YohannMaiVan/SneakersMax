// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';
import { NavLink } from 'react-router-dom';

// == Composant
const Product = ({ sneaker }) => {
  console.log('sneakers props', sneaker);
  return (
    <Fragment>
      <div className='product'>
        <NavLink
          to={{
            pathname: '/DetailProduct',
            state: { sneaker },
          }}
        >
          <img
            src={sneaker.Image}
            style={{ width: '150px', height: '150px' }}
          />
        </NavLink>
        <h2>{sneaker.Model}</h2>
        <p>{sneaker.Price}€</p>
      </div>
    </Fragment>
  );
};

// == Export
export default Product;
