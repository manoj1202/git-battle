import React, { Component } from 'react';
import './App.css';
import Home from "./components/home"
import Battle from "./components/battle"
import Popular from "./components/popular"
import {Route} from "react-router"
import Nav from "./components/navLink"



class App extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div >
        <div className="container">
          <Nav />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path= "/popular" component = {Popular} />
          </div>
        </div>        
      </div>
    );
  }
}
 

export default App;
