import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import logo from '../assest/img/logo.png'

export const AppHeader = () => {

  const navigate = useNavigate()

  return (
    <header className="app-header main-container">
      <div className="main-header flex">
        <div className="logo flex" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <div>My Mail List</div>
        {/* <nav className="main-nav">
          <NavLink className={() => "clean-link"} to="/favorites">Favorites</NavLink>
          <NavLink className={() => "clean-link"} to="/">Home page</NavLink>
        </nav> */}
      </div>
    </header>
  )

}

