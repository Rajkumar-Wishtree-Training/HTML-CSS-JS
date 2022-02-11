import React , {Component} from "react";
class Display extends Component{
    constructor(){
        super();
        this.state = {Total : 0};
    }
    onClickHandler(value){
        this.state.Total = this.state.Total + value;
        this.setState({Total:this.state.Total});
    }
    render(){
        return(
            <>
             <h1>{this.state.Total}</h1>
             <button onClick={()=>this.onClickHandler(10)}>10</button>
             <button onClick={()=>this.onClickHandler(20)}>20</button>
             <button onClick={()=>this.onClickHandler(30)}>30</button>
             <button onClick={()=>this.onClickHandler(40)}>40</button>
             <button onClick={()=>this.onClickHandler(50)}>50</button>
            </>
        )
    }
}
export default Display