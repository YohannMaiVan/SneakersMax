// == Import npm
import React, { Fragment } from 'react';

// == Import
import './styles.scss';
import Product from '../Product/index';
import Header from '../Header/index';

// == Composant
const Home = ({sneakers}) =>{
  console.log(sneakers);
  return (
  <React.Fragment>
    <Header />
    <div className="home">
      <div className='home-title'>APPAREL SUPER PROMOS! 40% EXTRA WITH CODE: APP40</div>
      <div className="home__model">
        {
          sneakers.map((sneaker) => (
            <Product key={`sneaker-${sneaker.name}` + `sneaker-${ sneaker.colorway}`}
            brand={sneaker.brand}
            name={sneaker.name}
            colorway={sneaker.colorway}
            price={sneaker.price}
            />
          ))
        }
      </div>
    </div>
  </React.Fragment>
)};

// == Export
export default Home;
