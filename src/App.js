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
                <Header
                    name={projects.header.name}
                    subtitle={projects.header.subtitle}
                />
                <div className="projects">
                    {
                        projects.projects.map((project) => (
                            <Project {...project} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default App;
