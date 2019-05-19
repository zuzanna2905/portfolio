import React from "react";
import ProgressBar from './ProgressBar/ProgressBar';
import { Route, Link } from "react-router-dom";

const Web = () => (
    <div>
      <p className='f4'>Web</p>
      <p className='f6'>Skills are scaled compared to one year of professional experience</p>
      <ul className='justify-center f5-ns f6 fw6'>
        <ProgressBar percentage={80} name={'JavaScript (ES6)'}/>
        <ProgressBar percentage={80} name={'HTML5'}/>
        <ProgressBar percentage={80} name={'CSS3'}/>
        <ProgressBar percentage={80} name={'RWD'}/>
        <ProgressBar percentage={80} name={'Bootstrap'}/>
        <ProgressBar percentage={80} name={'Babel'}/>
        <ProgressBar percentage={60} name={'SASS/SCSS'}/>
        <ProgressBar percentage={60} name={'React'}/>
        <ProgressBar percentage={60} name={'Redux'}/>
        <ProgressBar percentage={50} name={'NodeJS'}/>
        <ProgressBar percentage={40} name={'Jest'}/>
        <ProgressBar percentage={40} name={'Mocha/Chai'}/>
        <ProgressBar percentage={40} name={'Enzyme'}/>
        <ProgressBar percentage={40} name={'NextJS'}/>
        <ProgressBar percentage={30} name={'Saga'}/>
        <ProgressBar percentage={30} name={'TypeScript'}/>
      </ul>
      <p></p>
    </div>
);

const Databases = () => (
  <div>
  <p className='f4'>Databases</p>
  <p className='f6'>Skills are scaled compared to one year of professional experience</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={100} name={'SQL'}/>
    <ProgressBar percentage={80} name={'PostgreSQL'}/>
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
  <p className='f6'>Skills are scaled compared to number and complexity of academic projects</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={80} name={'JavaScript (ES6)'}/>
    <ProgressBar percentage={80} name={'C#'}/>
    <ProgressBar percentage={80} name={'C++'}/>
    <ProgressBar percentage={60} name={'C'}/>
    <ProgressBar percentage={60} name={'Java'}/>
    <ProgressBar percentage={50} name={'Ruby/RoR'}/>
    <ProgressBar percentage={40} name={'Python'}/>
    <ProgressBar percentage={20} name={'R'}/>
  </ul>
  <p></p>
  </div>
);

const Languages = () => (
  <div>
  <p className='f4'>Languages</p>
  <ul className='justify-center f5-ns f6 fw6'>
    <ProgressBar percentage={100} name={'Polish'}/>
    <ProgressBar percentage={80} name={'English Writing'}/>
    <ProgressBar percentage={70} name={'English Speaking'}/>
    <ProgressBar percentage={50} name={'Spanish Speaking'}/>
    <ProgressBar percentage={40} name={'Spanish Writing'}/>
  </ul>
  <p></p>
  </div>
);

const Others = () => (
  <div>
  <p className='f4'>Others</p>
  <p className='f6'>Skills are scaled compared to one year of professional experience</p>
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
    <ul className='list flex flex-wrap justify-center f5-ns f6'>
      <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
        <Link to={`${match.url}/web`}>Web</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
        <Link to={`${match.url}/databases`}>Databases</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
        <Link to={`${match.url}/programming`}>Programming</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
        <Link to={`${match.url}/others`}>Others</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
        <Link to={`${match.url}/languages`}>Languages</Link>
      </li>
    </ul>
    <div className='f3-ns f4 mh4 pv2 white justify-center shadow-4'>
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
            <p className='f3-ns f4 fw7 dark-green'>About</p>    
            <p className='f4-ns f5'>I&apos;m Computer Science graduate at Gdansk University of Technology 
            where I learned a lot</p>
            <p className='f4-ns f5'>I&apos;m self-learner in web development and I enjoy internet-based web development 
            courses</p>
            <p className='f4-ns f5 fw7 dark-green'>Select a skill category to check out</p>
          </div>
        }/>
    </div>
  </div>
);

  export default Skills;