import React,{Component} from "react"
import {Profile} from "./results"

class PlayerInput extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            name : false,
            data :[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange=(e) =>{
        let value = e.target.value;
        // console.log("value:", value)
        this.setState({
            username: value,
            
        })

    }


    handleSubmit= (e) =>{
        e.preventDefault();
        // console.log(this.state.username)
        // e.target.reset()
        console.log("username:" ,this.state.username)
       
        fetch(`https://api.github.com/users/${this.state.username}`)
         .then(response => response.json())
         .then(data => {
             console.log(data)
             this.setState({
                 data,
            }) 
         })
         .catch(error => console.log("Unable to fetch data", error))

        this.setState({
            name : true
        })

         this.props.onSubmit(
            this.props.id,
            this.state.username
        )

        // {this.props.id === "playerOne" && this.setState({dataOne: this.state.data})}
        // {this.props.id === "playerTwo" && this.setState({datatwo: this.state.data})}
        // console.log(this.state.dataOne)
        // console.log(this.state.dataTwo)
        
    }

    render(){
        //console.log(":", this.state.username)

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <p>{this.props.label}</p>
                <input 
                    id="username"
                    placeholder ="github username"
                    type = "text"
                    value ={this.state.username}
                    autoComplete= "off"
                    onChange ={this.handleChange}
                />
                <button 
                    type = "submit"
                    onSubmit = {this.handleSubmit}

                >
                    submit
                </button>
            </form>
            {this.state.name && (
                <div>
                    <p>UserName: {this.state.data.name ||this.state.username}</p>
                </div>
            )}
            <Profile  
                data = {this.state.data}
                username = {this.state.username}
            />

            </div>
        )
    }
}

// class Results extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             counterOne : 0,
//             counterTwo: 0,
//             dataOne:"",
//             dataTwo : ""
//         }
//     }

//     //  p1 = {this.props.id === "playerOne" && this.setState({dataOne: data})}
//     // {value && <div>
//     //     {id === "playerOne" && this.setState({dataOne: data})}
//     //     {console.log(this.state.dataOne)}
//     //     {id === "playerTwo" && this.setState({playerTwo : data})}
//     //     {console.log(this.state.dataTwo)}
//     // </div>}

//     render(){
        
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

PlayerInput.defaultProps={
    label: "username"
}

export default PlayerInput