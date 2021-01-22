import React from 'react'

export default props => (
    <div className="Card">
        <h3>{props.title}</h3>
        <img src={props.logo}></img>
        <h3>{props.description}</h3>
    </div>
)