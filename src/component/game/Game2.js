import React,{Component} from "react";

class Game2 extends Component
{
    state = {
        score: 0,
        gameOver: false
    };
    render(){
        return (
            <div>
                <h1>Your Scrore: {this.props.score}</h1>
            </div>
        )
    }
}

export default Game2