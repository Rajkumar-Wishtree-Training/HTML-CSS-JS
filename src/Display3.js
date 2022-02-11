import React, { Component } from 'react';

class Display3 extends Component {
    constructor() {
        super();
        this.state = { trnchecked: false };
    }
    onCheck = ()=>{
        let { trnchecked } = this.state;
        this.setState({trnchecked: !trnchecked});
    }
    render() {
        let { trnchecked } = this.state;
        return(
            <>
            Training : <input type="checkbox" defaultChecked={trnchecked}/>
            <button onClick={this.onCheck}>Check</button>
            </>
        )
    }
}

export default Display3