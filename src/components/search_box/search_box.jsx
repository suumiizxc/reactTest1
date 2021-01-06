import React from "react";
import "./search_box.style.css";

export const SearchBox = props => (
    <input 
        className="search-box"
        type="search"
        placeholder="search robots"
        onChange={props.onSearch}
    />
)