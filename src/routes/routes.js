import React from "react";
import { BrowserRouter as Routes, Switch, Route, Redirect } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AddCattle from "../pages/AddCattle";
import CattleDetails from "../pages/CattleDetails";
import CattleList from "../pages/CattleList";
import CreateTrip from "../pages/CreateTrip";
import EditCattle from "../pages/EditCattle";
import TripList from "../pages/TripList";
import TripDetails from "../pages/TripDetails";

const routes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Switch>
          <Redirect exact from="/" to="home" />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cattle" component={CattleList} />
          <Route exact path="/cattle/add" component={AddCattle} />
          <Route exact path="/cattle/:id" replace component={CattleDetails} />
          <Route exact path="/cattle/:id/edit" replace component={EditCattle} />
          <Route exact path="/trips" component={TripList} />
          <Route exact path="/trips/add" component={CreateTrip} />
          <Route exact path="/trips/:id" component={TripDetails} />
          {/* route doesn't match with any route */}
          <Route component={Home} />
        </Switch>
      </Routes>
    </React.Fragment>
  );
};
 
export default routes;
