import React from "react";
import { Route, Link } from "react-router-dom";

const Farmer = () => (
  <div>
    <p className='f3 fw5 purple'>Farmer</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>An application to managing a farm business.</p>
    <p>Data tables with informations about farm fields, employess, machines.</p>
    <p>Possibility to manipulating on this data (adding, editing, deleting).</p>
    <p>There is a lot possibilities how to extends the application: like charts.</p>
    <p>To using the application loging on is needed.</p>
    <p>The data is stored in database.</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on React, Express JS and PostgreSQL</p>
    <p>Frontend: React, JavaScript, CSS3, HTML5, Bootstrap, NodeJS</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: not yet</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const Spendings = () => (
  <div>
    <p className='f3 fw5 purple'>Spendings</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple application to managing your daily spendings.</p>
    <p>Data tables with informations about your spendings.</p>
    <p>Possibility to manipulating on data (adding, editing, deleting).</p>
    <p>Spendings charts in choosen dates.</p>
    <p>To using the application loging on is needed.</p>
    <p>The data is stored in database.</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on React, Express JS and PostgreSQL</p>
    <p>Frontend: React, JavaScript, CSS3, HTML5, NodeJS</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: not yet</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const Cafes = () => (
  <div>
    <p className='f3 fw5 purple'>Cafes</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>Four-page side about my best way to relax.</p>
    <p>Information cards about coffee</p>
    <p>Table with best cafes</p>
    <p>Coffee gallery</p>
    <p>Contact form</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The page is based on simple HTML5 & SCSS/CSS3</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const Coffee = () => (
  <div>
    <p className='f3 fw5 purple'>Coffee</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>Single simple page about coffee</p>
    <p>Few information about coffee</p>
    <p>Contact form</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The page is based on simple HTML5 & CSS3</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const TaskManager = () => (
  <div>
    <p className='f3 fw5 purple'>Task Manager</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple application to managing your daily tasks.</p>
    <p>Possibility to adding new tasks and checking done tasks.</p>
    <p>To using the application loging on is needed.</p>
    <p>The data is stored in database.</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on React, Express JS and PostgreSQL</p>
    <p>Frontend: React, JavaScript, CSS3, HTML5, NodeJS</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: not yet</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const Travels = () => (
  <div>
    <p className='f3 fw5 purple'>Travels</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple responsive page with travles photos.</p>
    <p>Contact form</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on HTML5 & CSS3</p>
    <p>Photo gallery based on css-grid & flexbox</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const Blog = () => (
  <div>
    <p className='f3 fw5 purple'>Blog</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A server side rendering site with some blog posts.</p>
    <p>Contact form, About page</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on HTML5 & CSS3 (styled-components library)</p>
    <p>Pages are written in JS & using NextJS</p>
    <p>No tests</p>
    <p className='f6 fw6 purple'>Click to view project</p>
  </div>
);

const Projects = ({ match }) => (
  <div className='washed-blue ma1 pa1'>
    <ul className='list flex flex-wrap justify-center f4-ns f5'>
        <li>
          <Link to={`${match.url}/farmer`}>Farmer App</Link>
        </li>
        <li>
          <Link to={`${match.url}/spendings`}>Spendings App</Link>
        </li>
        <li>
          <Link to={`${match.url}/taskmanager`}>Task Manager App</Link>
        </li>
        <li>
          <Link to={`${match.url}/cafes`}>Cafes Page</Link>
        </li>
        <li>
          <Link to={`${match.url}/coffee`}>Coffee Page</Link>
        </li>
        <li>
          <Link to={`${match.url}/travels`}>Travles Page</Link>
        </li>
        <li>
          <Link to={`${match.url}/blog`}>Blog Page</Link>
        </li>
      </ul>
      
    <div className='f4-ns f5 mh4 pv2 washed-blue justify-center shadow-4'>
      <Route path={`${match.url}/farmer`} component={Farmer} />
      <Route path={`${match.url}/spendings`} component={Spendings} />
      <Route path={`${match.url}/taskmanager`} component={TaskManager} />
      <Route path={`${match.url}/cafes`} component={Cafes} />
      <Route path={`${match.url}/coffee`} component={Coffee} />
      <Route path={`${match.url}/travels`} component={Travels} />
      <Route path={`${match.url}/blog`} component={Blog} />
      <Route
        exact
        path={match.url}
        render={() => 
          <div className='purple'>
            <p className='fw7'>About</p>
            <p>Most of my projects based on JS5, HTML5, CSS3 and React</p>
            <p>I am using NodeJS and Express to backend side</p>
            <p>I used to use PostgreSql to storage data</p>
            <p>In some projects I added tests (Jest/ Mocha & Chai)</p>
            <p>Some projects are dockerized</p>
            <p className='fw7'>Please select a project above</p>
          </div>
        }
      />
    </div>
    </div>
  );

  export default Projects;