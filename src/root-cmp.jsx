import React from 'react'
import { Switch, Route, Routes } from 'react-router-dom'


import { HomePage } from './pages/home-page.jsx'


import { AppHeader } from './cmps/app-header.jsx'

export class RootCmp extends React.Component {

  render() {
    return (
      <>
        <AppHeader />
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </>
    )
  }
}
