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
  let arrayName= [];
  for (let i = 0; i<sneakersArray.length; i++){
    sneakersArray[i].shift();
    arrayName.push(sneakersArray[i][0]);
  }
  console.log("arrayname value", arrayName);
  const DisplaySneakers = () => {
    if (searchTerm != "") {
      return (
        arrayName.filter(sneaker => (sneaker.Brand.toLowerCase().includes(searchTerm.toLowerCase()))).map((sneaker) => (
          <Product sneaker={sneaker} />
        ))
      )
        }
    else {
      return (
        arrayName.map((sneaker) => (
          <Product sneaker={sneaker} />
        ))
      )
    }
}
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
        <DisplaySneakers />
    </div>
  </div>}
</div>
)};

// == Export
export default Home;
