// import logo from './logo.svg';
// import react from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import react ,  {useState} from "react";
function App() {
     const [mode , setMode] = useState('light');
     const togleMode = () =>{
      if(mode === 'light'){
        setMode('dark')
       document.body.style.backgroundColor = 'black';
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
      } 
     }
    
  return (
    <>
        {/* <Navbar title="Rajkumar"  mode={mode} togleMode={togleMode}/>
        <div className="container">
        <TextBox heading="Enter your Text Below" mode={mode}/>
        </div> */}
        <About mode={mode} togleMode={togleMode}/>
    </>
  );
}

export default App;
