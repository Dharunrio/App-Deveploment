import React from 'react'
import store from '../Redux/Store'
import '../Assets/CSS/Main.css'
import Dialpad from './dialpad'
import ContactList from './Contactlist'
function Main() {
  return (
    <>
          <ContactList/>
          <h1 className='hello'>Hello,{ store.getState().email }</h1>
    <div className="main-container">
          <Dialpad/>
    </div>
    </>
  )
}

export default Main