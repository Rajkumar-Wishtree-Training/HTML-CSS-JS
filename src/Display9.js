import React , {useState} from 'react'

export default function Display9() {
    const [id , setId] = useState();
    const [name , setName] = useState();
    const [status , setStatus] = useState();
    const [style , setStyle] = useState(); 
    const onClickHandler = () =>{
        
    }
    const onClickInput = (e) =>{
        console.log(e.target)
    }
  return (
    <div>
        <input className='mx-3' type="text" placeholder='Enter ID' value={id} />
        <input className='mx-3' type="text" placeholder='Enter Name' value={name} />
        <select className='mx-3' name="" id="" value={status}>Select
        <option>Active</option>
        <option>Disabled</option> 
        </select>
        <select onChange={onClickInput} name="" id="" value={style}>Select 
        <option value="">CSS</option>
        <option value="">Class</option>
        </select>
        <button className='btn btn-primary mx-3' onClick={onClickHandler}>Click</button>
    </div>
  )
}
