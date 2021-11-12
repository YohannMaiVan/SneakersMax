// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import Product from '../Product/index';
import Header from '../Header/index';
import Modal from '../../containers/Modal';
import ObjectToArray from 'src/selectors/ObjectToArray';
import { NavLink } from 'react-router-dom';

// == Composant
const Home = ({ sneakers, shoppingCart, sneakerCart }) => {
  const sneakersArray = ObjectToArray(sneakers);
  console.log('array', sneakersArray);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('value searchTerm', searchTerm);
  let arrayName = [];
  for (let i = 0; i < sneakersArray.length; i++) {
    sneakersArray[i].shift();
    arrayName.push(sneakersArray[i][0]);
  }
  console.log('arrayname value', arrayName);
  const DisplaySneakers = () => {
    if (searchTerm != '') {
      return arrayName
        .filter((sneaker) =>
          sneaker.Brand.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((sneaker) => <Product sneaker={sneaker} />);
    } else {
      return arrayName.map((sneaker) => <Product sneaker={sneaker} />);
    }
  };

  return (
    <div>
      <Header />
      {sneakers && (
        <div className='home'>
          <div className='home-brands'>
            <ul className='home-brand'>
              <li>
                <NavLink to='/Nike'>NIKE</NavLink>
              </li>
              <li>
                <NavLink to='/Jordan'>JORDAN</NavLink>
              </li>
              <li>
                <NavLink to='/Adidas'>ADIDAS</NavLink>
              </li>
              <li>
                <NavLink to='/Yeezy'>YEEZY</NavLink>
              </li>
              <li>
                <NavLink to='/Reebok'>REEBOK</NavLink>
              </li>
            </ul>
          </div>
          <input
            type='text'
            placeholder='Search for a product...'
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className='home__model'>
            <DisplaySneakers />
          </div>
        </div>
      )}
      {shoppingCart && <Modal sneakerCart />}
    </div>
  );
};

// == Export
export default Home;
