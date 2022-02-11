import React , {useState} from "react";

export default function Display10() {
const [name , setName] = useState('');
const [cat , setCat] = useState('');
const [status, setStatus] = useState(false);
const [city , setCity] = useState('');
const [arr , setArr] = useState([]);
const [updateIndex , setUpdateIndex] = useState(-1);
const onChangeHandler = (e) =>{
  let {name , value} = e.target;
  console.log(name , value);
  setArr({...arr , [name] : value});
  
  // setName(name);
  // setCat(cat);
  // setStatus(status);
  // setCity(city);
// if(e.target.name === 'name'){
//     setName(e.target.value);
// }
// else if(e.target.name === 'cat'){
//     setCat(e.target.value);
// }
// else if(e.target.name === 'status'){
//     setStatus(true);
// }
// else{
//     setCity(e.target.value)
// }

}
const onClickHandler = (e) =>{
    e.preventDefault();
    console.log(arr);
    let data = {name , cat , status , city };
    if(updateIndex >= 0){
        arr[updateIndex] = data;
        setArr([...arr]);
        setUpdateIndex(-1);
    } 
    else{
        arr.push(data);
        setArr([...arr]);
    }
    setName('');
    setCat('');
    if(document.getElementById('flexRadioDefault1').checked) document.getElementById('flexRadioDefault1').checked = false;
    if(document.getElementById('flexRadioDefault2').checked) document.getElementById('flexRadioDefault2').checked = false;
    if(document.getElementById('flexCheckDefault').checked) document.getElementById('flexCheckDefault').checked = false;
}
const onClickUpdateHandler = (data , id) =>{
     setName(data.name);
     setCat(data.cat);
     setUpdateIndex(id);
    if(data.status) document.getElementById('flexCheckDefault').checked = true;
    if(data.city === 'Vadodara') document.getElementById('flexRadioDefault1').checked = true;
    if(data.city === 'Ahmedabad') document.getElementById('flexCheckDefault2').checked = true;
    
}
const onClickDeleteHandler = (id) =>{
    arr.splice(id,1);
    setArr([...arr])
}
  return (
    <div className="row">
        <div className="col-3 ml-3">
      <form onSubmit={onClickHandler} action="">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            value={name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <select className="form-select" aria-label="Default select example" name="cat" value={cat} onChange={onChangeHandler}>
            <option selected>Select Product Category</option>
            <option value="retail">Retail</option>
            <option value="fmcg">FMCG</option>
            <option value="pharma">Pharma</option>
          </select>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="status"
            value={status}
            onChange={onChangeHandler}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
           Status 
          </label>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="radio"
            name="city"
            id="flexRadioDefault1"
            value='Vadodara'
            onChange={onChangeHandler}
          />

          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Vadodara
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="city"
            id="flexRadioDefault2"
            value='Ahmedabad'
            onChange={onChangeHandler}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Ahmedabad
          </label>
        </div>
        <button className="btn btn-primary my-3" type="submit">Submit</button>
      </form>
      
      </div>
      <div className="col-7">
          <table className="table table-striped mx-5">
              <tbody>
                  <tr>
                      <th>Product ID</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>City</th>
                      <th>Update</th>
                      <th>Delete</th>

                  </tr>
                  {
                      arr.map((data, id) =>{
                          return(
                          <tr key={id}>
                              <td>{id}</td>
                              <td>{data.name}</td>
                              <td>{data.cat}</td>
                              <td>{data.status}</td>
                              <td>{data.city}</td>
                              <td><button onClick={() => onClickUpdateHandler(data,id)} className="btn btn-info">Update</button></td>
                              <td><button className="btn btn-danger" onClick={() => onClickDeleteHandler(id)}>Delete</button></td>
                          </tr>
                          )
                      })
                  }
              </tbody>
          </table>
      </div>
    </div>
  );
}
