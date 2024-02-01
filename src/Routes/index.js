import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from '../containers/Homepage'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes