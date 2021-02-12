import React from 'react';
import './style.scss';

const Insight = (props) => {
    let p = props.data;
    return (
        <div className={`insight-item ${props.active ? 'active' : ''}`} style={{ borderColor: p.color, color: p.color }} ref={props.elemRef}>
            <div>
                <img src={p.img} />
            </div>
            <h1>{p.title}</h1>
        </div>
    )
}

export default Insight
