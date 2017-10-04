import React from 'react'
import './styles.css'

export const Header = ({ name, subtitle }) => (
    <div className="header-container">
        <p className="header-name">{name}</p>
        <p className="header-subtitle">{subtitle}</p>
    </div>
)