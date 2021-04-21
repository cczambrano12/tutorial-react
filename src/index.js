import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './views/home';
import Data from './views/data';
import Data2 from './views/data2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Button, Toolbar } from '@material-ui/core';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AppBar position="static">
    <Toolbar color="inherit">
        <Button variant="outlined" component={Link} to={'/'}>
            Home
        </Button>
        <Button variant="outlined" component={Link} to={'/data'}>
            Data        
        </Button>
    </Toolbar>
    </AppBar>
    <Switch>
          <Route path="/data">
            <Data2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
