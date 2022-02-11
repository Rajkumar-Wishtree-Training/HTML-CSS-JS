// import React ,{useState , useEffect} from 'react'

// export default function Display7() {
//     const [arrData , setArrData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(()=>{
//         let tData = [
//             { empid: 1, empname: 'Rajat Singh', salary: 150000,dept:'Web development' },
//             { empid: 2, empname: 'Pragati Chauhan', salary: 950000, dept:'Software development' },
//             { empid: 3, empname: 'Aditya Singh', salary: 750000 , dept:'Mobile app development'},
//             { empid: 4, empname: 'Manoj Singh', salary: 650000 , dept:'Admin'},
//             { empid: 5, empname: 'Azad Rawat', salary: 750000, dept:'Web development'},
//             { empid: 6, empname: 'Amit Rawat', salary: 750000, dept:'Web development'},
//             { empid: 7, empname: 'Azad Rawat', salary: 750000, dept:'Web development'},
//             { empid: 8, empname: 'Ajay Rawat', salary: 750000, dept:'Web development'},
//             { empid: 9, empname: 'Azad Rawat', salary: 750000, dept:'HR'},
//             { empid: 10, empname: 'Azad Rawat', salary: 750000, dept:'HR'}]
//             if(loading){
//                 setArrData(tData);
//                 setLoading(false);    
//             }
//             let clientData = tData;
//     })
//     const onSelectDept = (event) =>{
//         let {value , options , selectedIndex} = event.target;
//         console.log(value);
//         console.log(options[selectedIndex].text)
//             clientData = tData.filter((data , id)=>{
//                 return  data.dept === options[selectedIndex].text;
//             })
        

//     }
//   return (
//     <div>
//          <h1>Employee List</h1>
//             {loading ? <span>Loading Data .....</span> : null}
//             <select onChange={onSelectDept}>
//                 <option value="3">Web development</option>
//                 <option value="9">Software development</option>
//                 <option value="6">Mobile app development</option>
//                 <option value="4">Admin</option>
//                 <option value="7">HR</option>
//             </select>
//        <table className="table table-striped">
//            <tbody>
//                <tr>
//                    <th>EmpID</th>
//                    <th>EmpName</th>
//                    <th>Salary</th>
//                    <th>Dept</th>
//                </tr>
//                {
//                 //    
//                    arrData.map((data , id)=>{
//                        return(
//                        <tr key={id}>
//                            <td>{data.empid}</td>
//                            <td>{data.empname}</td>
//                            <td>{data.salary}</td>
//                            <td>{data.dept}</td>
//                        </tr>
//                        )
//                    })
//                }
//            </tbody>
//        </table>
//     </div>
//   )
// }
