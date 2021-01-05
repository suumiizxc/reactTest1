import React from "react";
// import "cardlist.style.css";


export const CardList= props => (
    <div className="cardlist">
        {props.robots.map(el => (
            <div key={el.id}>
                {el.email}
            </div>
        ))}
    </div>

)


