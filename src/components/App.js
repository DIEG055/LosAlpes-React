import React from "react";
import "./Styles/App.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import Routes from "../routes/routes"

const App = () => {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
