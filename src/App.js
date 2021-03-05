import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
//Import react context dev tool
import { ContextDevTool } from 'react-context-devtool';
//Load Context
import { UserContext } from './components/store/context';

import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [value, setValue] = useState(null)

  return (
    <UserContext.Provider value={{value, setValue}}>
      <ContextDevTool context={UserContext} id="quick-start-pack-12345" displayName="User Context" />
      <Router>
        <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <hr/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
