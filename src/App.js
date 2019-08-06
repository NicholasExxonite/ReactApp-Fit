import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap';
import NavigationBar from './components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
