import React from 'react'
import store from '../Redux/Store'

function Main() {
  return (
    <>
          <h1>Hi,{ store.getState().email}</h1>
    </>
  )
}

export default Main