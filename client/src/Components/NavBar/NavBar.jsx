import React from 'react'
import "./NavBar.css"
import {useNavigate} from "react-router-dom"

export default function NavBar() {
    
    const navigate = useNavigate()

  return (
    <div className='NavBar'>
      <div>
          <div onClick={() => navigate("/")}><p>Home</p></div>
          <div onClick={() => navigate("/add_todo")} ><p>Add New Card</p></div>
      </div>
    </div>
  )
}
