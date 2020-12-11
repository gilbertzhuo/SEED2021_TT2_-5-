//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react';
import Header from '../Components/Header'
import Home from './Homepage'
import About from './Transaction'
import Contact from './ContactUs'
import ApiProg from './Transfer'
import ViewBalance from './ViewBalance';
function App() {
  return (
      <div>
        <Router>
          <Header/>
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/Transaction">
                <About/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route path="/Transfer">
                <ApiProg/>
              </Route>
              <Route path="/ViewBalance">
                <ViewBalance/>
              </Route>
            </Switch>
          </div>
        </Router>
        <button  onClick={() => {
              props.setIsAuthenticated(false);
            }}>Logout</button>
      </div>

  );
  //footer removed between the last DIV
}

export default App;