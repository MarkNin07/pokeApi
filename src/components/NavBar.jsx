import React from 'react'
import { TbPokeball } from 'react-icons/tb'

const NavBar = () => {
  return (
      <div className="navbar-container"> 
          <div className="navbar"> <TbPokeball /> Pokemon List</div>
          <div className="navbar-name">By: Mark Child</div>
      </div>
  )
}

export default NavBar