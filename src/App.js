import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap';

// Import main components
import Navbar from './components/Navbar';

// Import Routes
import Home from './routes/Home';
import ProblemBrowse from './routes/ProblemBrowse';
import ProblemView from './routes/ProblemView';
import ProjectsBrowse from './routes/ProjectsBrowse';
import Resume from './routes/Resume';
import Forward from './routes/Forward';


import './sass/main.scss';


function App() {
  return (
      <React.Fragment>
        <Navbar />
        <div className="route-container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/competitive_programming" component={ProblemBrowse}/>
            <Route path="/competitive_programming/view/:id" component={ProblemView} />
            <Route path="/projects" component={ProjectsBrowse} />
            <Route path="/resume" component={Resume} />
            <Route path="/redirect" component={Forward} />
            <Route component={Home} />
          </Switch>
        </div>
      </React.Fragment>
  );
}

export default App;
