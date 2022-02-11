import React, { Component } from "react";
import Display1 from "./Display5";
class Display extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      address: "",
    };
  }
  onChange = (e) =>{
    // console.log(e.target.value)
    // let {fullName , address} = this.state;
    // console.log(fullName , address)
    let {name , value} = e.target;
    if (name === "fullName") {
      this.setState({fullName : value})
    } else {
      this.setState({address : value})
    }
  }
  render() {
    return (
      <>
        <div className="form-group">
          <h2>{this.state.fullName ? this.state.fullName : "Enter Your Name"}</h2>
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.onChange}
          ></input>
        </div>
        <div className="form-group">
          <h2>{this.state.address ? this.state.address: "Enter Your address"}</h2>
          <input
            type="text"
            name="address"
            className="form-control"
            value={this.state.address}
            onChange={this.onChange}
          ></input>
        </div>
      </>
    );
  }
}
export default Display;