import React,{useState , useEffect} from 'react'
import axios from 'axios'
export default function Day10_Assignment() {
    const [ vendorArr , setVendorArr] = useState([]);
    const [id , setid] = useState();
    const [name , setName] = useState('');
    const [contactNo , setContactNo] = useState('');
    const [type , setType] = useState(false);
    const [vendorobj , setVendorObj] = useState({});
    const getVendor = () =>{
        axios.
        get('http://localhost:4000/Vendor').
        then(response=>{
           setVendorArr(response.data);
        })
    }
    useEffect(()=>{
        getVendor();
    },[])
    const onChangeHandler = (e) =>{
       if(e.target.name === 'id') setid(e.target.value);
       else if(e.target.name === 'name') setName(e.target.value);
       else if(e.target.name === 'contactNo') setContactNo(e.target.value);
       else {
           setType(true);
           
       }
       setVendorObj({id , name , contactNo , type})
       
      }
    const onClickHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/Vendor',vendorobj).
        then(response =>{
            console.log(response);
            getVendor();
        })
        setid('');
        setName('');
        setContactNo('');
        setType(false);
    }
    const onClickDeleteHandler = (id) =>{
        axios.delete('http://localhost:4000/Vendor/'+id).
        then(response =>{
            console.log(response);
            getVendor();
        })
    }
    const onChangeSelect = (e) =>{
        // console.log(e.target.value)
        {
         const data =   vendorArr.filter((item,id)=>{
                return item.id === e.target.value;
            })
        setid(data[0].id);
        setName(data[0].name);
        setContactNo(data[0].contactNo);
        setType(data[0].type)
        }
        

    }
    const onClickUpdate = (id) =>{
        // e.preventDefault()
        console.log(id);
        console.log(vendorobj)
        axios.put('http://localhost:4000/Vendor/'+id,vendorobj).
        then(response =>{
            console.log(response);
            getVendor();
        })

    }
  return (
      <>
          <select name="" id="" onChange={onChangeSelect}>
            {
                vendorArr.map((data,id)=>{
                    return(
                        <option value={data.id} key={id}>{data.name}</option>
                    )
                })
               
            }
        </select>
    <div className='row'>
        
        <table className='table col-6 mx-3'>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact No</th>
                    <th>type</th>
                    <th>Delete</th>
                </tr>
                {
                 
                  vendorArr.map((item,id)=>{
                      return(
                      <tr key={id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.contactNo}</td>
                          <td><input type="checkbox" checked={item.type}/></td>
                          <td><buttton className="btn btn-danger" onClick={()=>onClickDeleteHandler(item.id)}>Delete</buttton></td>
                      </tr>
                      )
                  })
                }
            </tbody>
        </table>
            <form action=""  className='mx-5 col-4'>
            <div className="mb-3">
                    <label htmlFor="id" className='form-label'>ID: </label>
                    <input type="text" name="id" id="id" value={id} onChange={setid(e.target.value)} className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className='form-label'  >Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={onChangeHandler} className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className='form-label' >Contact No: </label>
                    <input type="text" name="contactNo" id="contact" value={contactNo} onChange={onChangeHandler} className='form-control' />
                </div>
                <div className="mb-3 form-check">
                    
                    <input type="checkbox" name="type" id="type" value={type} onChange={onChangeHandler} className='form-check-input' checked={type}/>
                    <label htmlFor="type" className='form-check-label'>type </label>
                </div>
                <button className="btn btn-primary mx-3" onClick={onClickHandler}>Submit</button>
                <button className="btn btn-secondary" onClick={()=>onClickUpdate(id)}>Update</button>
            </form>
        </div>
        </>
  )
}
