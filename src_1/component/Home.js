import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [arr , setArr] = useState([]);
  const onClickHandler = (e) => {
    let data = {name , email , salary , department}
    console.log(e.target)
      e.preventDefault();
      arr.push(data);
    console.log([...arr])
    setArr([...arr]);
  };
  const onChangeHandler = (e) => {
    if(e.target.name === 'email') setEmail(e.target.value);
    else if(e.target.name === 'name') setName(e.target.value);
    else if(e.target.name === 'salary') setSalary(e.target.value);
    else setDepartment(e.target.value);
  };
  const onClickDeleteHandler = (id) =>{
      arr.splice(id , 1);
    //   console.log(arr);
      setArr([...arr]);
  }
  const onClickUpdateHandler = (id) =>{
    let data = arr[id];
    console.log(data);
    setName(data.name);
    setEmail(data.email);
    setSalary(data.salary);
    setDepartment(data.department);

    // onClickHandler(id);
  }
  return (
    <div>
      <form className="col-5 mx-3 mt-2">
        <h1 className="text-center">Sign Up</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={onChangeHandler}
            className="form-control"
            id="exampleInputEmail1"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label mx-2">
            Name
          </label>
          <input
            type="text"
            onChange={onChangeHandler}
            value={name}
            className="form-control"
            name="name"
            id="Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label mx-2">
            Salary
          </label>
          <input
            type="number"
            value={salary}
            onChange={onChangeHandler}
            className="form-control"
            id="salary"
            name="salary"
            
          />
        </div>
        <select
          className="form-select"
          onChange={onChangeHandler}
        //   value={dept}
          aria-label="Default select example"
          name="department"
        >
          <option>Department</option>
          <option value='WebDevelopment'>Web</option>
          <option value='Mobile'>Mobile</option>
          <option value='DevOps'>Devops</option>
        </select>
        
        <button className="btn btn-primary  my-3" onClick={onClickHandler}>
          Submit
        </button>
      </form>
      <table className="table table-striped col-4">
          <tbody>
              <tr>
                <th>ID</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Department</th>
                  <th>Delete</th>
                  <th>Update</th>
              </tr>
              {
                  arr.map((data,id) =>{
                      return(
                        <tr key={id}>
                          <td>{id}</td>
                        <td>{data.email}</td>
                        <td>{data.name}</td>
                        <td>{data.salary}</td>
                        <td>{data.department}</td>
                        <td><button className="btn btn-danger" onClick={() => onClickDeleteHandler(id)}>Delete</button></td>
                        <td><button className="btn btn-info" onClick={() => onClickUpdateHandler(id)}>Update</button></td>
                    </tr>
                      )
                     
                  })
              }
          </tbody>
      </table>
    </div>
  );
}
