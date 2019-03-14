import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import DynamicImport from '../components/DynamicImport/DynamicImport';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Hobbies from '../components/Hobbies/Hobbies';
import Contact from '../components/Contact/Contact';
import './App.css';

// const Home = (props) => (
//   <DynamicImport load={() => import('./Home')}>
//     {(Component) => Component === null
//       ? <p>Loading</p>
//       : <Component {...props} />}
//   </DynamicImport>
// )

// const Projects = (props) => (
//   <DynamicImport load={() => import('./Projects')}>
//     {(Component) => Component === null
//       ? <p>Loading</p>
//       : <Component {...props} />}
//   </DynamicImport>
// )

// const Skills = (props) => (
//   <DynamicImport load={() => import('./Skills')}>
//     {(Component) => Component === null
//       ? <p>Loading</p>
//       : <Component {...props} />}
//   </DynamicImport>
// )

// const Hobbies = (props) => (
//   <DynamicImport load={() => import('./Hobbies')}>
//     {(Component) => Component === null
//       ? <p>Loading</p>
//       : <Component {...props} />}
//   </DynamicImport>
// )

// const Contact = (props) => (
//   <DynamicImport load={() => import('./Contact')}>
//     {(Component) => Component === null
//       ? <p>Loading</p>
//       : <Component {...props} />}
//   </DynamicImport>
// )

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
            <li>
              <Link to="/contact">Contact</Link>
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