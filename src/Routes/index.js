import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Homepage from '../containers/Homepage'
import WorkExperience from '../containers/WorkExperience'
import Project from '../containers/Project'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='Experience' element={<WorkExperience />} />
            <Route path='Project' element={<Project />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes