import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/competitive_programming" component={ProblemBrowse}/>
        <Route path="/competitive_programming/view/:id" component={ProblemView} />
        <Route path="/projects" component={ProjectsBrowse} />
        <Route path="/resume" component={Resume} />
      </Switch>
  );
}

export default App;
