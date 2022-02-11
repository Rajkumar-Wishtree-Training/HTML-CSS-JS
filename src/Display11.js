import React, { Component } from 'react'
import axios from 'axios'
export default class Display11 extends Component {
    constructor(){
        super();
        this.state = {Employee : []};
    }
    componentDidMount(){
        axios.get('http://localhost:3001/users').then((response)=>{
            console.log(response.data , response.status)
        });
    }
  render() {
    return (
      <div>
          <h1>Employee</h1>
      </div>
    )
  }
}
