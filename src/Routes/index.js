import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Homepage from '../containers/Homepage';
import AboutMe from '../component/AboutMe/AboutMe';
import WorkExperience from '../component/WorkExperience';
import Project from '../component/Project';
import Certificate from '../component/Certificate';
import Contact from '../component/Contact';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />

                {/* Route Slider Component */}
                <Route path='aboutme' element={<Element name="aboutMe"><AboutMe /></Element>} />
                <Route path='workexperience' element={<Element name="workExperience"><WorkExperience /></Element>} />
                <Route path='project' element={<Element name="Project"><Project /></Element>} />
                <Route path='certificate' element={<Element name="Certificate"><Certificate /></Element>} />
                <Route path='contact' element={<Element name="Contact"><Contact /></Element>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
