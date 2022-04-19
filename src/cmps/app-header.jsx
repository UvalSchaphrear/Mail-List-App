import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

export const AppHeader = () => {

  const navigate = useNavigate()

  return (
    <header className="app-header main-container">
      <div className="main-header flex">

        <div className="logo" onClick={() => navigate("/")}>
          My Mail List
        </div>
        <nav className="main-nav">
          <NavLink className={() => "clean-link"} to="/favorites">Favorites</NavLink>
          <NavLink className={() => "clean-link"} to="/">Home page</NavLink>
        </nav>
      </div>
    </header>
  )

}

