import React from "react";
import { Route, Link } from "react-router-dom";

const Web = () => (
    <div>
      <p className='f4'>Web</p>
      <ul className='justify-center f5-ns f6 fw6'>
        <li>ES5 4/5</li>
        <li>HTML5 4/5</li>
        <li>CSS3 4/5</li>
        <li>RWD 4/5</li>
        <li>Bootstrap 4/5</li>
        <li>Babel 4/5</li>
        <li>SASS/SCSS 3/5</li>
        <li>React 3/5</li>
        <li>Webpack 2/5</li>
        <li>NodeJS 2/5</li>
        <li>Jest 2/5</li>
        <li>Redux 1/5</li>
        <li>Enzyme 1/5</li>
      </ul>
      <p></p>
    </div>
);

const Databases = () => (
  <div>
  <p className='f4'>Databases</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <li>PostgreSQL 4/5</li>
    <li>SQL 4/5</li>
    <li>MS SQL 3/5</li>
    <li>MySql 3/5</li>
    <li>MongoDB 3/5</li>
  </ul>
  <p></p>
  </div>
);

const Programming = () => (
  <div>
  <p className='f4'>Programming</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <li>C# 4/5</li>
    <li>JS 4/5</li>
    <li>C++ 4/5</li>
    <li>C 3/5</li>
    <li>Java 3/5</li>
    <li>R 2/5</li>
    <li>Python 2/5</li>
  </ul>
  <p></p>
  </div>
);

const Languages = () => (
  <div>
  <p className='f4'>Languages</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <li>English: writting 4/5 & speaking 3/5</li>
    <li>Spanish: writting 2/5 & speaking 3/5</li>
    <li>Polish: mother language</li>
  </ul>
  <p></p>
  </div>
);

const Others = () => (
  <div>
  <p className='f4'>Others</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <li>Git 4/5</li>
    <li>Unity Engine 4/5</li>
    <li>Agile 3/5</li>
    <li>CMake 2/5</li>
  </ul>
  <p></p>
  </div>
);

const Skills = ({ match }) => (
  <div className='washed-blue ma1 pa1'>
    <ul className='list flex flex-wrap justify-center f4-ns f5'>
      <li>
        <Link to={`${match.url}/web`}>Web</Link>
      </li>
      <li>
        <Link to={`${match.url}/databases`}>Databases</Link>
      </li>
      <li>
        <Link to={`${match.url}/programming`}>Programming</Link>
      </li>
      <li>
        <Link to={`${match.url}/others`}>Others</Link>
      </li>
      <li>
        <Link to={`${match.url}/languages`}>Languages</Link>
      </li>
    </ul>
    <div className='f3-ns f4 mh4 pv2 washed-red justify-center shadow-4'>
      <Route path={`${match.url}/web`} component={Web} />
      <Route path={`${match.url}/databases`} component={Databases} />
      <Route path={`${match.url}/languages`} component={Languages} />
      <Route path={`${match.url}/programming`} component={Programming} />
      <Route path={`${match.url}/others`} component={Others} />
      <Route
        exact
        path={match.url}
        render={() => 
          <div>
            <p className='f4 fw7 yellow'>Select a skill category</p>
            <p className='f5'>I rate each skill from 1 (beginner) to 5 (master)</p>
          </div>
        }/>
    </div>
  </div>
);

  export default Skills;