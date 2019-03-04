import React from 'react';
import me from './smallImages/me.jpg';

const Home = () => (
    <div className='washed-blue ma1 pa1'>
      <p className='f3-ns f4'>Hi, I am Zuzanna!</p>
      <p className='f4-ns f6'>I am looking for a job as <span className='fw7 dark-green'>JavaScript/React Developer </span></p>
      <p className='f4-ns f6'>Currently I am cooding for myself & improving skills everyday</p>
      <p className='f4-ns f6'>I don not have a commercial experience but just look at my <span className='fw7 purple'> 
      skills & projects</span> and give mi a chance</p>
      <img className='br4' src={me} alt={"me"}/>
    </div>
  );

export default Home;