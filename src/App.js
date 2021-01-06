import React, { Component } from "react";
import './App.css';
import {CardList} from'./components/cardlist/cardlist'
import {SearchBox} from './components/search_box/search_box'



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({robots: data}));
  }

  onSearchChanged = event => {
    this.setState({searchField:event.target.value});
  }


  render(){
    
    const {robots, searchField} = this.state;
    console.log(searchField);
    const filteredRobots = robots.filter(el => el.name.toLowerCase().includes(searchField));


    return(
      <div className="App">
        <h1>Robotics search</h1>  
        <SearchBox onSearch={this.onSearchChanged}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }

}