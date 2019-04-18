import React from "react";
import { Route, Link } from "react-router-dom";
import Cafes from './Cafes/Cafes';
import Travels from './Travels/Travels';

const HobbyHome = () => (
  <div className='f4-ns f5 mh4 pa2 justify-center shadow-2'>
    <p>I think life-work balance is really important</p>
    <p>I give myself some time to relax and do things I love</p>
    <p>If you want to know me better <span className='fw7 dark-green'>choose above the category</span></p>
    <p>Welcome!</p>
  </div>
);

const Hobbies = ({ match }) => (
    <div className='washed-blue ma1 pa1'>
      <ul className='list flex flex-wrap justify-center f5-ns f6'>
        <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
          <Link to={`${match.url}/cafes`}>Coffee</Link>
        </li>
        <li className='br2 ba b--white-30 justify-center pa2 ml3-ns mh1 mv1'>
          <Link to={`${match.url}/travels`}>Travels</Link>
        </li>
      </ul>
      <Route path={`${match.url}/cafes`} component={Cafes} />
      <Route path={`${match.url}/travels`} component={Travels} />
      <Route
      exact
      path={match.url}
      render={() => HobbyHome()}/>
    </div>
  );

  export default Hobbies;