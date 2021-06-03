// == Import npm
import React, { useEffect } from 'react';

// == Import
import './styles.scss';
import HomeContainer from '../../containers/Home';
import { Route, Switch } from 'react-router-dom';

// == Composant
const App = ({ fetchSneakers }) => {
  useEffect(() => {
    fetchSneakers();
  }, []);
  return (
  <div className="app">
    <Switch>
      <Route path="/" exact component={HomeContainer} />
    </Switch>
  </div>
)};

// == Export
export default App;
