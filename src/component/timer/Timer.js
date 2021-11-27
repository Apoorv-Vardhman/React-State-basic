import React, {Component} from 'react';

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num : 0
        }
        this.makeTimer();
    }

    makeTimer(){
        setInterval(()=>{
            let rand = Math.floor(Math.random()*this.props.number)
            this.setState({
                num: rand
            })
        },1000)
    }

    render() {
        return (
            <h1>Number is {this.state.num}</h1>
        )
    }
}
export default Timer;
