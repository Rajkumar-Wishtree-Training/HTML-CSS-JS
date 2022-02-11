import React from 'react'
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom'
import Day10_Assignment from './Day10_Assignment'
export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Link to='/day10'>Click Here</Link>
       <Routes>
           <Route path='/day10' element = {<Day10_Assignment/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
