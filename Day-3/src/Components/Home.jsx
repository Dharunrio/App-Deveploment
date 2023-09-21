import React from 'react'
import Dashboard from '../Assets/CSS/Dashboard.css'
import store from '../Redux/Store'
import { Link, Outlet } from 'react-router-dom'
function Home() {
  return (
      <div className='imagevodafone'>
    <div className='icon'> 
    </div>
    <div>
        <nav className='topnav'>
      <label className="logo">PhoneBook</label>
      <ul>
        <div className='active'>
        <li><a href="/Register">Log Out</a></li>
        </div>
      </ul>
    </nav>

    <nav className='leftnav'>
      <label className="navleft"></label>
      <ul>
        <div className='navbar'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="addcontact">AddContact</Link></li>
        <li><Link to="editcontact">EditContact</Link></li>
        <li><Link to="search">Search</Link></li>
        </div>
      </ul>
    </nav>
    </div>
    <div style={{width:"80%", right : 0, position : "absolute"}}>
      <Outlet/>
    </div>
    </div>
  )
}

export default Home