// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';
import Product from '../Product/index';
import Header from '../Header/index';

// == Composant
const Home = ({sneakers}) =>{
  console.log("testttt", sneakers);
  return (
  <div>
    <Header />
 {sneakers && <div className="home">
      <div className='home-title'>APPAREL SUPER PROMOS! 40% EXTRA WITH CODE: APP40</div>
      <div className="home__model">
        {/* {
          sneakers.map((sneaker) => (
            <Product {...sneaker}/>
            ))
        } */}
      </div>
    </div>}
  </div>
)};

// == Export
export default Home;
