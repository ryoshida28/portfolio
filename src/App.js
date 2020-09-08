import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap';

// Import Routes
import Home from './routes/Home';
import ProblemBrowse from './routes/ProblemBrowse';
import ProblemView from './routes/ProblemView';
import ProjectsBrowse from './routes/ProjectsBrowse';
import Resume from './routes/Resume';


import './sass/main.scss';


function App() {
  return (
    <React.Fragment>
      {/* Header */}
      {/* Navbar */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/competitive_programming">
          <ProblemBrowse />
        </Route>
        <Route exact path="/competitive_programming/view/:id">
          <ProblemView />
        </Route>
        <Route exact path="/projects">
          <ProjectsBrowse />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route path="*">
          404
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
