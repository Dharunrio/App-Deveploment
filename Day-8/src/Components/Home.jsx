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
      <ul className='allactive'>
        <div className='active'>
          <li><a href="/Register">Log Out</a></li>
          <Link to="/faq"><div className='sample-txt'>FAQ</div></Link>
          <Link to="/terms"><div className='sample-txt1'>TERMS & CONDITIONS</div></Link>
          <Link to="/privacy"><div className='sample-txt2'>PRIVACY POLICY</div></Link>
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
      <Outlet/>
    </div>
    
  )
}

export default Home