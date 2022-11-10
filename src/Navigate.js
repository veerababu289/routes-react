import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';
const Navigate = () => {
  return (
    <div className="menubar">
        <ul>
           <li> <Link to="/" >Home</Link></li>
           <li> <Link to="/dashboard" > Dashboard</Link></li>
           <li><Link to="/about" > About</Link></li>
        </ul>
    </div>
  )
}

export default Navigate