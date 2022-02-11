import React, {Component} from "react";
class Display extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <>
              <h1>{this.props.title}</h1>
            </>
        )
    }
}
export default Display;