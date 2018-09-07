import React,{Component} from "react";
import {Link} from "react-router-dom"

class Home extends Component{
    render(){
        return(
            <div className = "home-container">
                <h2>Github Battle: Battle With your friends ....</h2>
                <Link className = "buttonStyle" to="/battle">Battle</Link>  
            </div>
        )
    }
}

export default Home