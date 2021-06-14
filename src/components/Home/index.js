// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';
import Product from '../Product/index';
import Header from '../Header/index';
import ObjectToArray from 'src/selectors/ObjectToArray';

// == Composant
const Home = ({sneakers}) =>{
  const sneakersArray = ObjectToArray(sneakers)
  console.log("array", sneakersArray)
  const [searchTerm, setSearchTerm] = useState("");
  console.log("value searchTerm", searchTerm);
  console.log("longueur sneakers array", sneakersArray.length);
  let arrayName= [];
  for (let i = 0; i<sneakersArray.length; i++){
    arrayName.push(sneakersArray[i][0]);
  }
  console.log("arrayName value", arrayName);
  return (
  <div>
    <Header />
 {sneakers && <div className="home">
      <div className='home-title'>APPAREL SUPER PROMOS! 40% EXTRA WITH CODE: APP40</div>
			<input
        type="text"
        placeholder="Search for a product..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/>
      <div className="home__model">
        {
            searchTerm == "" ? sneakersArray.map((sneaker) => (
              <Product sneaker={sneaker}
              searchTerm={searchTerm} />
              ))
              : <div>test</div>
          // })
          // sneakersArray.map((sneaker) => (
          //   <Product sneaker={sneaker}
          //   searchTerm={searchTerm} />
          //   ))
        }
        {/* {
              sneakersArray.filter((val)=> {
                if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  <div>Product</div>
                }
              }
        } */}
      </div>
    </div>}
  </div>
)};

// == Export
export default Home;
