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
    state = { width: 0, height: 0}
    
    TEST_URL = 'https://gist.githubusercontent.com/jaruserickson/42f6908415e889a662c70c7f6e080a11/raw/a3fd4006ba949e5dcaf599aee5c09f62292e7bf8/jaruserickson.json'
    JSON_URL = 'https://files.jaruserickson.com/jaruserickson.json'

    loadJson = async () => {
        const apiResult = await fetch(this.JSON_URL)
        const siteData = await apiResult.json()
        this.setState({projects: siteData})
    }

    componentDidMount() {
        // this.JSON_URL = this.TEST_URL
        this.loadJson()

        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
                        {
                            this.state.height > 500 && (
                                <Link 
                                    to="projects" 
                                    className="down"
                                    smooth={true} 
                                    duration={500}
                                >
                                    <FaAngleDown size={38} color={'rgba(255,255,255,0.8)'}/>
                                </Link>
                            )
                        }
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
                    <div className="bg-gradient" style={{
                        backgroundPosition: 'top',
                        backgroundSize: '100% 100%',
                        backgroundSize: 'cover'
                    }}/>
                </div>
            ) : null
    }
}

export default App;
