import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
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
  );
}

export default App;
