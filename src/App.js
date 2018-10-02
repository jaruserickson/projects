import React, { Component } from 'react'
import './App.css'
import {
    Header,
    Project
} from './components'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import {
    Element,
    Link
} from 'react-scroll'

class App extends Component {
    state = {}
    JSON_URL = 'https://files.jaruserickson.com/jaruserickson.json'

    loadJson = async () => {
        const apiResult = await fetch(this.JSON_URL)
        const siteData = await apiResult.json()
        this.setState({projects: siteData})
    }

    componentDidMount() {
        this.loadJson()
    }

    render() {
        return this.state.projects ? (
                <div className="app">
                    <div className="header-container">
                        <Header
                            name={this.state.projects.header.name}
                            subtitle={this.state.projects.header.subtitle}
                            social={this.state.projects.header.social}
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
                            this.state.projects.projects.map((project) => (
                                <Project {...project} />
                            ))
                        }
                    </div>
                    <div className="bg" style={{
                        background: this.state.projects.background + ' no-repeat',
                        backgroundPosition: 'top',
                        backgroundSize: '100% 100%',
                        backgroundSize: 'cover'
                    }}/>
                </div>
            ) : null
    }
}

export default App;
