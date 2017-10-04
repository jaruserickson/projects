import React, { Component } from 'react'
import './App.css'
import {
    Header,
    Project
} from './components'
import projects from './projects.json'

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
                </div>
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
