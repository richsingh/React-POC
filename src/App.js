import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar';
import {Home} from './home';
import {Create} from './Create';
import ProjDashboard from './ProjDashboard';
// import Popup from "reactjs-popup";

function App() {
  return (
    <React.Fragment>
    <Router> 
    <NavigationBar />   
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/Create" component={Create}/>
      <Route exact path="/ProjDashboard" component={ProjDashboard} />
    </Switch>
    </Router>
    
  </React.Fragment>
  );
}

export default App;
