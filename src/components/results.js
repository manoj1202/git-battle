import React from "react"

export function Profile(props){
    const {followers,following,name,location,public_repos,company} =props.data
    const altName = props.username

    return(
        <div>
            {props.data.length !== 0 && 
                <div>
                    <ul>
                        {name && <li>Name : {name}</li>}
                        {location &&<li>Location : {location}</li>}
                        {company && <li>Company : {company}</li>}
                        <li>Followers : {followers}</li>
                        <li>Following : {following}</li>
                        <li>Repos : {public_repos}</li>
                    </ul>
                    <img   src={props.data.avatar_url} alt = {`@ ${altName}`} width ="100" height= "100" />    
                </div>
            }
        </div>
    )
}

export function Player (props){
    return(
        <div>
            <h1>{props.label}</h1>
            <h3>Score : {props.score}</h3>
            <Profile info ={props.data}/>
        </div>
    )
}

