import React,{Component} from "react"
import PlayerInput from "./playerInput"
//import Results from "./results"

class Battle extends Component{
    constructor(props){
        super(props);
        this.state ={
            playerOneName: "",
            playerTwoName : "",
        }
    }

     handleSubmit = (e,id,username) => {
        // console.log("id:" , id)
        // console.log("userName: " , username)
        if(id === "playerOne"){
            this.setState({
                playerOneName : username,

            })
            console.log(this.state.playerOneName)
        }
        if(id === "playerTwo"){
            this.setState({
                playerTwoName: username,
            })
        }

        // this.setState( function(){
        //     var newState = {};
        //     newState[id + 'Name'] = username;
        //     newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
        //     return newState;
        //   });  
        
    }

    handleReset(e){
        // this.setState(() => {
        //     let newState = {}
        //     newState[id+ "Name"] = ""
        //     newState[id + "image"] = null
        //     return newState
        // })
        e.target.reset()
    }
    render(){
        let playerOneName = this.state.playerOneName
        let playerTwoName = this.state.playerTwoName
        // let playerOneImage = this.state.playerOneImage
        // let playerTwoImage = this.state.playerTwoImage
        return(
            <div>
                <h1>Welcome to Battle page</h1>
                <div>
                    {!playerOneName &&
                        <PlayerInput 
                            id = "playerOne"
                            label = "Player One"
                            name = "user1"
                            onSubmit = {this.handleSubmit}
                        />
                    }

                        <button
                            onClick = {this.handleReset.bind(this, "playerOne")}
                        >
                            Reset
                        </button>
                    
                        
                      <br/><br/>

                    {!playerTwoName &&
                        <PlayerInput 
                            id = "playerTwo"
                            label = "Player Two"
                            name = "user2"
                            onSubmit = {this.handleSubmit}
                        />
                    }
                    
                        <button
                            onClick = {this.handleReset.bind(this, "Player Two")}
                        >
                            Reset
                        </button>
                </div>
                
            </div>
        )
    }
}

export default Battle