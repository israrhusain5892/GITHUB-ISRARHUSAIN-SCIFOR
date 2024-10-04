import React,{Component} from "react";

class MyclassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    increament=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count+1,
        }));
    };

    render(){
        return(
            <div>
                  <h1>count: {this.state.count}</h1>
                  <button onClick={this.increament}>Increament</button>
            </div>
        )
    }
}

export default MyclassComponent;