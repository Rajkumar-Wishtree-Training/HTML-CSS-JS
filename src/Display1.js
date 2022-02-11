import React , {Component} from "react";
class Dis extends Component {
    constructor(){
        super();
        this.state = {counter : 0};
    }
    onChange = ()=>{
        // this.setState(++this.state.counter);
        this.state.counter++;
        // console.log(this.state.counter)
        let {counter} = this.state;
        this.setState({counter});
    }
    render(){
        return(
            <>
            <div>
                <h2>Counter : {this.state.counter}</h2>
            </div>
            <button onClick={this.onChange}>Submit</button>
            </>
        )
    }
}
export default Dis;