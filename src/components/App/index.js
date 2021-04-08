// == Import npm
import React, { useEffect } from 'react';

// == Import
import './styles.scss';
import Home from '../../containers/Home';
import { Route, Switch } from 'react-router-dom';

// == Composant
const App = ({sneakers, fetchSneakers}) => {
  useEffect(() => {
    fetchSneakers();
  }, []);
  console.log("APP", sneakers);
  return (
  <div className="app">
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </div>
)};

// == Export
export default App;
