import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Styles/App.scss';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import AddCattle from '../pages/AddCattle';
import CattleDetails from '../pages/CattleDetails';
import CattleList from '../pages/CattleList';
import CreateTrip from '../pages/CreateTrip';
import TripList from '../pages/TripList';
import TripDetails from '../pages/TripDetails';

function App() {
  return (
    <BrowserRouter> 
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/cattle" component={ CattleList} />
          <Route exact path="/cattle/add" component={ AddCattle } />
          <Route exact path="/cattle/:id" component={ CattleDetails } />
          <Route exact path="/trip" component={ TripList} />
          <Route exact path="/trips/add" component={ CreateTrip } />
          <Route exact path="/trips/:id" component={ TripDetails } />
          {/* <Route component={NotFound} /> */}
        </Switch> 
    </BrowserRouter>

  );
}

export default App;
