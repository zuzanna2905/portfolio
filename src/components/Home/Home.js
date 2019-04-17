import React from 'react';
import me from '../../assets/images/me.jpg';

const Home = () => (
    <div className='washed-blue ma1 pa1'>
      <p className='f3-ns f5'>Hi, I am Zuzanna!</p>
      <p className='f4-ns f6'>I am looking for a job as <span className='fw7 dark-green'>JavaScript/React Developer </span></p>
      <p className='f4-ns f6'>I have a Bachelor degree in Computer Science</p>
      <p className='f4-ns f6'>Currently I am coding for myself & I am improving skills everyday</p>
      <p className='f4-ns f6'>I don not have a commercial experience in this domain but just look at my <span className='fw7 purple'> 
      skills & projects</span> and give mi a chance</p>
      <img className='br4' src={me} alt={"me"}/>
    </div>
  );

export default Home;