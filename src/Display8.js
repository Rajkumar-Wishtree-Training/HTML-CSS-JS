import React, {useState} from 'react'

export default function Display8() {
    const [arrData , setArrData] = useState([
        { empid: 1, empname: 'Rajat Singh', salary: 150000,dept:'Web development' },
        { empid: 2, empname: 'Pragati Chauhan', salary: 950000, dept:'Software development' },
        { empid: 3, empname: 'Aditya Singh', salary: 750000 , dept:'Mobile app development'},
        { empid: 4, empname: 'Manoj Singh', salary: 650000 , dept:'Admin'},
        { empid: 5, empname: 'Azad Rawat', salary: 750000, dept:'Web development'},
        { empid: 6, empname: 'Amit Rawat', salary: 750000, dept:'Web development'},
        { empid: 7, empname: 'Azad Rawat', salary: 750000, dept:'Web development'},
        { empid: 8, empname: 'Ajay Rawat', salary: 750000, dept:'Web development'},
        { empid: 9, empname: 'Azad Rawat', salary: 750000, dept:'HR'},
        { empid: 10, empname: 'Azad Rawat', salary: 750000, dept:'HR'}
    ]);
    const [empid , setEmpid] = useState();
    const onSubmitFormHandler = (event)=>{
        event.preventDefault();
        // console.log(event.target.value);
       let id = document.getElementById('exampleFormControlTextarea1').value
       arrData.filter((arrData,id)=>{
           
       })
    }
  return (
    <div>        
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <table className='table'>
            <tbody>
                <tr>
                <th>EmpID</th>
                   <th>EmpName</th>
                   <th>Salary</th>
                   <th>Dept</th>
                </tr>
                {
                    arrData.map((data, idx) =>{
                        return(
                            <tr key={idx}>
                                <td>{data.empid}</td>
                                <td>{data.empname}</td>
                                <td>{data.salary}</td>
                                <td>{data.dept}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
       
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <form onSubmit={onSubmitFormHandler}>
        <div className="mb-3 col-6 mx-4">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">EmpId</label>
  <input className="form-control" name="empid" defaultValue={empid}  id="exampleFormControlTextarea1"/>
</div>
<div className="form-check mx-5">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Active
  </label>
</div>
<div className="form-check mx-5">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Disabled
  </label>
</div>
<div className="form-check mx-5 mt-4">
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    CSS
  </label>
</div>
<div className="form-check mx-5">
  <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2"/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Style
  </label>
</div>
<button className="btn btn-primary my-3 mx-5">Click Here</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
