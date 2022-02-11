import React, { Component } from "react";
class Display1 extends Component {
  constructor() {
    super();
    this.state = {
      clientData: [
        {
          clientId: 123,
          clientName: "A1 Pvt Ltd",
          dueAmount: 50000,
          type: "local",
        },
        {
          clientId: 124,
          clientName: "A2 Pvt Ltd",
          dueAmount: 80000,
          type: "central",
        },
        {
          clientId: 125,
          clientName: "A3 Pvt Ltd",
          dueAmount: 70000,
          type: "local",
        },
        {
          clientId: 126,
          clientName: "A4 Pvt Ltd",
          dueAmount: 90000,
          type: "local",
        },
        {
          clientId: 127,
          clientName: "A5 Pvt Ltd",
          dueAmount: 20000,
          type: "central",
        },
        {
          clientId: 128,
          clientName: "A6 Pvt Ltd",
          dueAmount: 30000,
          type: "local",
        },
        {
          clientId: 129,
          clientName: "A7 Pvt Ltd",
          dueAmount: 70000,
          type: "central",
        },
        {
          clientId: 130,
          clientName: "A8 Pvt Ltd",
          dueAmount: 50000,
          type: "local",
        },
      ],
      tempclientData: [],
    };
  }
  componentDidMount(){
    let {tempclientData , clientData} = this.state;
    tempclientData = clientData;
    this.setState({tempclientData});
}
  onClickHandler = (type) =>{
      let {tempclientData , clientData} = this.state;
        if(type === 'all'){
           clientData = tempclientData;
        }
        else{
            clientData = tempclientData.filter((data)=>{
                return data.type === type;
            });
        }
        this.setState({clientData});
  }
  render() {
    return (
      <div>
        <table className="table table-dark table-striped">
          <tbody>
              <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Due Amount</th>
                <th>Type</th>
              </tr>
              {this.state.clientData.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.clientId}</td>
                    <td>{item.clientName}</td>
                    <td>{item.dueAmount}</td>
                    <td>{item.type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button  onClick={()=>this.onClickHandler("local")} className="btn btn-info mr-3">Local</button>
        <button onClick={()=>this.onClickHandler("central")} className="btn btn-info mr-3">Central</button>
        <button onClick={()=>this.onClickHandler("all")} className="btn btn-info">All</button>
      </div>
    );
  }
}
export default Display1;
