import React, { Component } from "react";
import './App.css';
import {CardList} from'./components/cardlist/cardlist'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      robots : []
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({robots: data}));
  }



  render(){
    return(
      <div className="App">
        <h1>Rototics search</h1>  
        <CardList robots={this.state.robots}/>
      </div>
    )
  }

}