import React from 'react';
import me from '../../assets/images/me.jpg';

const Home = () => (
    <div className='washed-blue ma1 pa1'>
      <p className='f3-ns f5'>Hi, I&apos;m Zuzanna!</p>
      <p className='f4-ns f6'>I&apos;m looking for a job as<span className='fw7 dark-green'> JavaScript/React Developer </span></p>
      <p className='f4-ns f6'>I have a Bachelor degree in Computer Science</p>
      <p className='f4-ns f6'>Currently I&apos;m coding for myself & I&apos;m improving my skills everyday</p>
      <p className='f4-ns f6'>If you like my projects contact me</p>
      <img className='br4' src={me} alt={"me"}/>
    </div>
  );

export default Home;