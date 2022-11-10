import React from 'react'
import Navigate from './Navigate'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Task from './Task'
import {Link} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Task/>
      <BrowserRouter>
      <Navigate/>
      <Routes>
        <Route path='/'  element= {<Home/>} />
        <Route path='/dashboard'  element= {<Dashboard/>} />
        <Route path='/about'  element= {<About/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App