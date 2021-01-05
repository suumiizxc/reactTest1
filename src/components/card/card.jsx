import React from 'react';
import './card.style.css';

export const Card = props =>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.robot.id + 10}png`} alt="" />
        <h2>
            {props.robot.name}
        </h2>
        <p>
            {props.robot.email}
        </p>
    </div>
)