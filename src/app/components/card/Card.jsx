import React from 'react'
import './Card.css';

export default props => (
    <div className="card">
        <h3>{props.title}</h3>
        <img src={props.logo}></img>
        <h3>{props.description}</h3>
    </div>
)