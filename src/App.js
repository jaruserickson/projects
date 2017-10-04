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
                <a className="button" href="https://jaruserickson.com/">
                    <Header
                        name={projects.header.name}
                        subtitle={projects.header.subtitle}
                    />
                </a>
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
