import React from "react"
import {Link} from "react-router-dom"


function Nav (){
    return(
        <ul className = "nav">
            <li>
                <Link exact="true"   to="/">Home</Link>
            </li>
            <li>
                <Link  to= "/battle">Battle</Link>
            </li>
            <li>
                <Link  to="/popular">Popular</Link>
            </li>
        </ul>
    )
}

export default Nav