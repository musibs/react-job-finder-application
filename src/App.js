import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Job from './components/Job';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/:id" component={Job} />

        </Switch>
      </div>
    </React.Fragment>
    </Router>
  );
}

export default App;
