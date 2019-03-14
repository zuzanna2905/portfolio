import React from "react";
import './ProgressBar.css';

const ProgressBar = (props) => {
    return (
        <div className='progress-bar'>
            <Filler percentage={props.percentage} name={props.name}/>
        </div>
    )    
}

const Filler = (props) => {
    return (<div className='filler' style={{width: `${props.percentage}%`}}>{props.name}</div>)
}

export default ProgressBar;