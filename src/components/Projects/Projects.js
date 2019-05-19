import React, {Component} from "react";
import { Route, Link } from "react-router-dom";

const Farmer = () => (
  <div>
  </div>
);

const Spendings = () => (
  <div>
  </div>
);

const Burger = () => (
  <div>
  </div>
);

const Cafes = () => (
  <div>    
  </div>
);

const Coffee = () => (
  <div>
  </div>
);

const TaskManager = () => (
  <div>
  </div>
);

const Travels = () => (
  <div>
  </div>
);

const Blog = () => (
  <div>
  </div>
);

const SmartBrain = () => (
  <div>
  </div>
);

const RoboFriends = () => (
  <div>
  </div>
);

class Projects extends Component {
  state = {
    showProjects : false
  }

  showProjects = () => {
    this.setState({showProjects: !this.state.showProjects})
  }

  render() {
    const {match} = this.props;
    const navigation = this.state.showProjects ? <ul className='list flex flex-wrap justify-center f5-ns f6'>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/spendings`} onClick={this.showProjects}>Spendings</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/burger`} onClick={this.showProjects}>Burger</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/cafes`} onClick={this.showProjects}>Cafes</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/coffee`} onClick={this.showProjects}>Coffee</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/farmer`} onClick={this.showProjects}>Farmer</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/taskmanager`} onClick={this.showProjects}>Task Manager</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/travels`} onClick={this.showProjects}>Travels</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/blog`} onClick={this.showProjects}>Blog</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/smartbrain`} onClick={this.showProjects}>Smart Brain</Link>
      </li>
      <li className='br2 ba b--white-30 justify-center pa2 mh3-ns mv1 w-10-l w-20-m'>
        <Link to={`${match.url}/robofriends`} onClick={this.showProjects}>Robots Friends</Link>
      </li>
    </ul> : null;
    return (
      <div className='washed-blue ma1 pa1'>
        <button className='white br2 ba ma2 b--white-30 justify-center bg-transparent pa2 w-40' onClick={this.showProjects}>Show projects</button>
        {navigation} 
        <div className='f5-ns f6 mh4 pv2 washed-blue justify-center shadow-4'>
          <Route path={`${match.url}/farmer`} component={Farmer} />
          <Route path={`${match.url}/spendings`} component={Spendings} />
          <Route path={`${match.url}/taskmanager`} component={TaskManager} />
          <Route path={`${match.url}/cafes`} component={Cafes} />
          <Route path={`${match.url}/coffee`} component={Coffee} />
          <Route path={`${match.url}/travels`} component={Travels} />
          <Route path={`${match.url}/blog`} component={Blog} />
          <Route path={`${match.url}/smartbrain`} component={SmartBrain} />
          <Route path={`${match.url}/robofriends`} component={RoboFriends} />
          <Route path={`${match.url}/burger`} component={Burger} />
          <Route
            exact
            path={match.url}
            render={() => 
              <div className='white f4-ns f5'>
                <p className='fw7 dark-green'>About</p>
                <p>Most of my latest projects are based on ES6, HTML5, CSS3 and React/Redux</p>
                <p>I use NodeJS and Express for backend side</p>
                <p>I use PostgreSql/Firebase for data storage</p>
                <p>In some projects I add tests (Jest/ Mocha & Chai)</p>
                <p>Some projects are dockerized</p>
                <p className='fw7 purple'>Please select a project above</p>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

  export default Projects;