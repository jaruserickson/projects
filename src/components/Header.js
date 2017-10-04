import React from 'react'
import Social from './Social'
import './styles.css'

export const Header = ({ name, subtitle, social }) => (
    <div className="header-container">
        <p className="header-name">{name}</p>
        <p className="header-subtitle">{subtitle}</p>
        <Social {...social}/>
    </div>
)