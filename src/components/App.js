import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Contact from './Contact';
import './App.css'

class App extends Component {
  render() {
  return (
    <Router>
      <div className='App'>
        <div className='shadow-1 f4-ns f5 pv1'>
          <ul className='list flex flex-wrap ph4 justify-center'>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/hobbies">Hobbies</Link>
            </li>
          </ul>
        </div>
        <div className='shadow-4 pb3 mh1'>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/contact" component={Contact} />   
        </div>     
        <div className="footer pv4 ph3 ph5-m ph6-l light-blue">
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    </Router>
  )}
}

export default App;