import React from 'react';

const Project = props => {
    return (
        <div className='white'>
            <div className='w-50-l w-100'>
                <p className='f4 fw5 purple'>{props.data.name}</p>
                <div className='idea'>
                    <p className='fw6 dark-green'>Idea</p>
                    <p>{props.data.description}</p>
                </div>
                <div className='technology'>                
                    <p className='fw6 dark-green'>Technologies</p>
                    <p>Frontend: {props.data.front}</p>
                    <p>Backend: {props.data.back}</p>
                    <p>Database: {props.data.data}</p>
                    <p>Tests: {props.data.test}</p>
                </div>
                <div className='links'>
                    <p><a href={props.data.frontLink}
                        target="_blank" rel="noopener noreferrer"
                        className='f6 fw6 purple'>Click to view frontend code 
                    </a></p>
                    <a href={props.data.backLink}
                        target="_blank" rel="noopener noreferrer"
                        className='f6 fw6 purple'>Click to view server code
                    </a>
                </div>
            </div>
            <div>
                <a href={props.data.appLink}>
                    <img src={props.data.imgLink} alt={props.data.imgAlt}/>
                </a>
            </div>
        </div>
    );
}

export default Project;