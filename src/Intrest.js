import React , {useState , useEffect} from "react";
function Display(){
    const [amount , setamount] = useState(0);
    const [time , settime ] = useState();
    const [intrest , setintrest] = useState();
    const [res , setres] = useState();
    const submitValue = () =>{
        console.log(amount , time , intrest)
        let total = amount * time * intrest / 100;
        let result = parseInt(amount)+parseInt(total);
        result = result / (time * 12);
        setres(result.toFixed(2));
    }
    return(
        <>
        <h2>{res}</h2>
        <div>
            <label htmlFor="amt">Amount</label>
            <input type="number" className="form-control" id="amt"  onChange={(e) => setamount(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="time">Time(Years)</label>
            <input type="number" className="form-control"  onChange={(e)=>settime(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="int">Intrest</label>
            <input type="number" className="form-control" id="int"  onChange={(e)=>setintrest(e.target.value)}/>
        </div>
        <div>
            <button className="btn btn-primary mt-3" onClick={submitValue}>Submit</button>
        </div>
        </>
    )
}
export default Display;