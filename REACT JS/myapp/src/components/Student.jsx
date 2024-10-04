import React,{Component} from "react";

class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            name:props.name,
            rollno:props.rollno,
            address:props.address
        }
    }

    display=()=>{
        this.setState((prevstate)=>({
            name:'israr husain',
            rollno:'543434734',
            address:'bareilly up'
        }));
    };

    render(){
        return(
            <div>
                  <h1>Name: {this.state.name}</h1>
                  <h1>roll no: {this.state.rollno}</h1>
                  <h1>address: {this.state.address}</h1>
                  <button onClick={this.display}>Show</button>
            </div>
        )
    }
}

export default Student;