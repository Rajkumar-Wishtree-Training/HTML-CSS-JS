import React, { Component } from "react";
import axios from "axios";
export default class Day_9_Ass extends Component {
    constructor() {
        super();
        this.state = { Department: [], Employee: [], selectDId: 0 };
    }
    componentDidMount() {
        axios.get("http://localhost:4000/Department").then(response => {
            this.setState({ Department: response.data });
        })
        axios.get("http://localhost:4000/Employee").then(response => {
            this.setState({ Employee: response.data });
        })
    }
    onChangeDDL = (e) =>{
        this.setState({selectDId : e.target.value})
    }
  render() {
    let  {Employee , Department , selectDId} = this.state;
    return (
      <div>
        <div className="container text-center">
          <h1 className="my-3">Employee</h1>
          <select name="" id="" onChange={this.onChangeDDL}>
              <option value="0" selected>All</option>
           {
               Department.map((data,id)=>{
                   return(
                   <option key={id} value={data.id}>{data.deptName}</option>
                   )
               })
           }
          </select>
        </div>
        <div className="container text-center my-5">
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Deptartment</th>
                    </tr>
                    {
                        Employee.map((data,id) =>{
                          const department =   Department.filter((data1)=>{
                               return data1.id === data.deptid
                            })
                            console.log(department);
                            return(
                                ((parseInt(selectDId) == parseInt(data.deptid) || parseInt(selectDId) == 0) &&
                                 <tr key={id}>
                                     <td>{data.id}</td>
                                     <td>{data.name}</td>
                                     <td>{data.salary}</td>
                                     <td>{department[0].deptName}</td>
                                 </tr>
                                )
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}
