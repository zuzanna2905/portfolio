import React, {Component} from "react";
import { Route, Link } from "react-router-dom";

const Farmer = () => (
  <div>
    <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Farmer</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>An application to managing a farm business.</p>
    <p>Data tables with informations about farm fields, employess, machines.</p>
    <p>Possibility to manipulating on this data (adding, editing, deleting).</p>
    <p>There is a lot possibilities how to extends the application: like charts.</p>
    <p>To using the application loging on is needed.</p>
    <p>The data is stored in database.</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>Frontend: React, JavaScript, CSS3, HTML5, Bootstrap, NodeJS</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: not yet</p>
    <p><a href='https://github.com/zuzanna2905/Farmer'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view frontend code 
    </a></p>
    <a href='https://github.com/zuzanna2905/FarmerAPI'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view server code
    </a>
    </div>
    <div>
      <img src='' alt=''/>
    </div>
  </div>
);

const Spendings = () => (
  <div>
    <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Spendings</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple application to managing your daily spendings.</p>
    <p>Data tables with informations about your spendings.</p>
    <p>Possibility to manipulating on data (adding, editing, deleting).</p>
    <p>Spendings charts in choosen dates.</p>
    <p>To using the application logging in is needed.</p>
    <p>The data is stored in database.</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>Frontend: React/Redux, JavaScript, CSS3, HTML5, NodeJS</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: not yet</p>
    <p><a href='https://github.com/zuzanna2905/Spendings'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view frontend code
    </a></p>
    <a href='https://github.com/zuzanna2905/SpendingsAPI'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view server code
    </a>  
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const Burger = () => (
  <div>
    <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Burger</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>An application to ordering burgers</p>
    <p>Possibility to manipulating on burger (adding, deleting ingredients).</p>
    <p>Profile page with previous orders</p>
    <p>To using the application logging in is needed. (not yet)</p>
    <p>The data is stored in Firebase database.</p>
    <p>Project based on Udemy Course</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>Frontend: React/Redux, JavaScript, CSS3, HTML5, NodeJS</p>
    <p>Database: Firebase</p>
    <p>Tests: not yet</p>
    <p><a href='https://github.com/zuzanna2905/Burger'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view frontend code
    </a></p> 
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const Cafes = () => (
  <div>    
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Cafes</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>Four-page side about my best way to relax.</p>
    <p>Information cards about coffee</p>
    <p>Table with best cafes</p>
    <p>Coffee gallery</p>
    <p>Contact form</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The page is based on HTML5 & SCSS/CSS3</p>    
    <a href='https://github.com/zuzanna2905/TricityCoffeehouses'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view code
    </a>    
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const Coffee = () => (
  <div>
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Coffee</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>Single simple page about coffee</p>
    <p>Few information about coffee</p>
    <p>Contact form</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The page is based on HTML5 & CSS3</p>
    <a href='https://github.com/zuzanna2905/Coffee'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view code
    </a>
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const TaskManager = () => (
  <div>
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Task Manager</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple application to managing your daily tasks.</p>
    <p>Possibility to adding new tasks and checking done tasks.</p>
    <p>To using the application loging on is needed.</p>
    <p>The data is stored in database.</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>Frontend: React, JavaScript, CSS3, HTML5, NodeJS</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: Jest / Mocha+Chai</p>
    <p><a href='https://github.com/zuzanna2905/TaskManager/tree/simple'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view Frontend code
    </a></p>
    <a href='https://github.com/zuzanna2905/taskManagerAPI'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view server code
    </a>
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const Travels = () => (
  <div>
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Travels</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple responsive page with travles photos.</p>
    <p>Contact form</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on HTML5 & CSS3</p>
    <p>Photo gallery based on css-grid & flexbox</p>
    <a href='https://github.com/zuzanna2905/travel'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view code
    </a>
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const Blog = () => (
  <div>
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Blog</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A server side rendering site with some blog posts.</p>
    <p>Contact form, About page</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on HTML5 & CSS3 (styled-components library)</p>
    <p>Pages are written in JS & using NextJS</p>
    <p>No tests</p>
    <a href='https://github.com/zuzanna2905/blog'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view code
    </a>
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const SmartBrain = () => (
  <div>
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Smart Brain</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>Dockerized React App</p>
    <p>Using clarifai API recognized faces on images</p>
    <p>To use app you have to register and sign in to your account</p>
    <p>This is a part of Udemy Web Development course</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>Frontend: React, JavaScript, CSS3, HTML5, NodeJS, Tachyons</p>
    <p>Server Side: JavaScript, NodeJS, ExpressJS</p>
    <p>Database: PostgreSQL</p>
    <p>Tests: Mocha/Chai</p>
    <p>Dockerized</p>
    <p><a href='https://sleepy-mesa-24434.herokuapp.com/'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view project
    </a></p>
    <p><a href='https://github.com/zuzanna2905/facerecognition'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view Frontend code
    </a></p>
    <a href='https://github.com/zuzanna2905/facerecognitionAPI'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view server code
    </a>
    </div>
    <div>
    <img src='' alt=''/>
    </div>
  </div>
);

const RoboFriends = () => (
  <div>
  <div className='w-50-l w-100'>
    <p className='f4 fw5 purple'>Robo Friends App</p>
    <p className='fw6 dark-green'>Idea</p>
    <p>A simple app with some Robots and Search box to filter them</p>
    <p>This is a part of Udemy Web Development course</p>
    <p className='fw6 dark-green'>Technologies</p>
    <p>The app is based on HTML5 & CSS3 (tachyons) & JS</p>
    <p>App is using React and Redux</p>
    <p>Tests: Jest/Enzyme</p>
    <a href='https://robotsfriends.herokuapp.com/'
      target="_blank" rel="noopener noreferrer"
      className='f6 fw6 purple'>Click to view project
    </a>
    </div>
      <div>
      <img src='' alt=''/>
      </div>
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
                <p>Most of my latest projects based on ES6, HTML5, CSS3 and React/Redux</p>
                <p>I use NodeJS and Express to backend side</p>
                <p>I use PostgreSql/Firebase to storage data</p>
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