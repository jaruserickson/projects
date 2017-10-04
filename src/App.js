import React, { Component } from 'react'
import './App.css'
import {
    Header,
    Project
} from './components'
import projects from './projects.json'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import {
    Element,
    Link
} from 'react-scroll'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="header-container">
                    <Header
                        name={projects.header.name}
                        subtitle={projects.header.subtitle}
                        social={projects.header.social}
                    />
                    <Link 
                        to="projects" 
                        className="down"
                        smooth={true} 
                        duration={500}
                    >
                        <FaAngleDown size={38} color={'rgba(255,255,255,0.8)'}/>
                    </Link>
                </div>
                <Element name="projects" /> 
                <p className="projects-title">projects</p>
                <div className="projects">
                    {
                        projects.projects.map((project) => (
                            <Project {...project} />
                        ))
                    }
                </div>
                <div className="bg" style={{
                    background: projects.background + ' no-repeat',
                    backgroundPosition: 'top',
                    backgroundSize: '100% 100%',
                    backgroundSize: 'cover'
                }}/>
            </div>
        )
    }
}

export default App;
