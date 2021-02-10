import React from 'react';
import './style.scss';

const Event = (props) => {
    let p = props.data;
    return (
        <div className={`event ${props.active ? 'active' : ''}`} ref={props.elemRef}>
            <div className="date">
                <span>{p.date.month}</span>
                <span>{p.date.date}</span>
            </div>
            <div style={{ width: "1000px" }}>
                <h1>{p.name}</h1>
                <p>{p.description}</p>
                <button>{p.button}</button>
            </div>
            <span>{p.location}</span>
        </div>
    )
}

export default Event
