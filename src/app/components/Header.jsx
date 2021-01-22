import React from 'react'
import './Header.css';

export default props => {
    function goHome() {
        console.log("HOME")
    }
    function goAbout() {
        console.log("HOME")
    }
    function goAcademic() {
        console.log("HOME")
    }
    function goExperiences() {
        console.log("HOME")
    }
    function goProjects() {
        console.log("HOME")
    }

    return (
        <div className='header'>
            <div onClick={goHome}>
                <h3>Home</h3> {/* title */}
            </div>
            <div onClick={goAbout}>
                <h3>About</h3> {/* profissional aquisition */}
            </div>
            <div onClick={goAcademic}>
                <h3>Academic</h3> {/* schools */}
            </div>
            <div onClick={goExperiences}>
                <h3>Experiences</h3> {/* works and apresentations */}
            </div>
            <div onClick={goProjects}>
                <h3>Projects</h3> {/* projects */}
            </div>
        </div>
    )
}