import React from "react";
import { Route, Link } from "react-router-dom";
import Cafes from './Cafes';
import Travels from './Travels';

const HobbyHome = () => (
  <div className='f3-ns f4 mh4 pv2 washed-red justify-center shadow-2'>
    <p>I think lifework balance is really important</p>
    <p>I give myself some time to relax and do things which i love</p>
    <p>If you want to get to know me better <span className='fw7 yellow'>choose above the category</span></p>
    <p>Wellcome!</p>
  </div>
);

const Hobbies = ({ match }) => (
    <div className='washed-blue ma1 pa1'>
      <ul className='list flex flex-wrap justify-center f4-ns f5'>
        <li>
          <Link to={`${match.url}/cafes`}>Coffee</Link>
        </li>
        <li>
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