import React from "react";
import ProgressBar from './ProgressBar/ProgressBar';
import { Route, Link } from "react-router-dom";

const Web = () => (
    <div>
      <p className='f4'>Web</p>
      <ul className='justify-center f5-ns f6 fw6'>
        <ProgressBar percentage={80} name={'ES5'}/>
        <ProgressBar percentage={80} name={'HTML5'}/>
        <ProgressBar percentage={80} name={'CSS3'}/>
        <ProgressBar percentage={80} name={'RWD'}/>
        <ProgressBar percentage={80} name={'Bootstrap'}/>
        <ProgressBar percentage={80} name={'Babel'}/>
        <ProgressBar percentage={60} name={'SASS/SCSS'}/>
        <ProgressBar percentage={60} name={'React'}/>
        <ProgressBar percentage={40} name={'Webpack'}/>
        <ProgressBar percentage={40} name={'NodeJS'}/>
        <ProgressBar percentage={40} name={'Jest'}/>
        <ProgressBar percentage={40} name={'Mocha/Chai'}/>
        <ProgressBar percentage={40} name={'NextJS'}/>
        <ProgressBar percentage={20} name={'Redux'}/>
        <ProgressBar percentage={20} name={'Enzyme'}/>
      </ul>
      <p></p>
    </div>
);

const Databases = () => (
  <div>
  <p className='f4'>Databases</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={80} name={'PostgreSQL'}/>
    <ProgressBar percentage={80} name={'SQL'}/>
    <ProgressBar percentage={60} name={'MS SQL'}/>
    <ProgressBar percentage={60} name={'MySQL'}/>
    <ProgressBar percentage={60} name={'MongoDB'}/>
  </ul>
  <p></p>
  </div>
);

const Programming = () => (
  <div>
  <p className='f4'>Programming</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={80} name={'C#'}/>
    <ProgressBar percentage={80} name={'JS'}/>
    <ProgressBar percentage={80} name={'C++'}/>
    <ProgressBar percentage={60} name={'C'}/>
    <ProgressBar percentage={60} name={'Java'}/>
    <ProgressBar percentage={40} name={'Python'}/>
    <ProgressBar percentage={40} name={'R'}/>
  </ul>
  <p></p>
  </div>
);

const Languages = () => (
  <div>
  <p className='f4'>Languages</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={100} name={'Polish'}/>
    <ProgressBar percentage={80} name={'English Speaking'}/>
    <ProgressBar percentage={60} name={'English Writting'}/>
    <ProgressBar percentage={40} name={'Spanish Speaking'}/>
    <ProgressBar percentage={60} name={'Spanish Writting'}/>
  </ul>
  <p></p>
  </div>
);

const Others = () => (
  <div>
  <p className='f4'>Others</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={80} name={'Git'}/>
    <ProgressBar percentage={80} name={'Unity Engine'}/>
    <ProgressBar percentage={60} name={'Agile'}/>
    <ProgressBar percentage={40} name={'CMake'}/>
    <ProgressBar percentage={40} name={'Docker'}/>
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