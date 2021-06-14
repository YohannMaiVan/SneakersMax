// == Import npm
import React, { useEffect } from 'react';

// == Import
import './styles.scss';
import HomeContainer from '../../containers/Home';
import Inscription from '../../containers/Inscription';
import Connexion from '../Connexion';
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
      <Route path="/connexion" component={Connexion} />
      <Route path="/inscription" component={Inscription} />
    </Switch>
  </div>
)};

// == Export
export default App;
