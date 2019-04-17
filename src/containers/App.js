import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import DynamicImport from '../components/DynamicImport/DynamicImport';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Hobbies from '../components/Hobbies/Hobbies';
import Contact from '../components/Contact/Contact';
import git from '../assets/images/git.png';
import mail from '../assets/images/mail.png';
import cv from '../assets/images/cv.png';
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
        <div className='shadow-1 f5-ns f6 pv1'>
          <ul className='list flex ph4-ns ph1 justify-end'>
            <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
              <Link to="/"> Home </Link>
            </li>
            <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
              <Link to="/projects">Projects</Link>
            </li>
            <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
              <Link to="/skills">Skills</Link>
            </li>
            <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
              <Link to="/hobbies">Hobbies</Link>
            </li>
            <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
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
        <div className="footer f6 pv4 ph3 ph5-m ph6-l white">
          <a className='mh1' href='https://github.com/zuzanna2905' rel='noopener noreferrer' target='_blank'>
            <img className='h3-ns h2' src={git} alt='git'/>
          </a>
          <Link to="/contact">
            <img className='h3-ns h2' src={mail} alt='mail'/>
          </Link>
          <a className='mh1' href='http://tiny.cc/Zuzanna' rel='noopener noreferrer' target='_blank' download='PusiewiczZuzanna'>
            <img className='h3-ns h2' src={cv} alt='cv'/>
          </a>
          <p>Copyright 2019 Zuzanna Pusiewicz</p>
        </div>
      </div>
    </Router>
  )}
}

export default App;