import React from "react";
import "./cardlist.style.css";
import { Card } from '../card/card';


export const CardList= props => (
    <div className="cardlist">
        {props.robots.map(el => (
            <Card key={el.id} robot={el} />
            
        ))}
    </div>

)


