import React from 'react'
import Links from './Links'
import '../styles.css'

export default ({
    name,
    url,
    fromTime,
    toTime,
    desc,
    tech,
    links
}) => (
    <div className="desc-container">
        <p className="desc-name">{name.toLowerCase()}</p>
        <i className="desc-time">{fromTime.toUpperCase()} {toTime !== '.' ? '-' : ''} {toTime !== '.' ? toTime.toUpperCase() : ''}</i>
        <p className="desc-desc">{desc}</p>
        <p>
        {
            tech.map((teche) => (
                <i className="desc-tech">{teche.toUpperCase()}<br/></i>
            ))
        }
        </p>
        <Links url={url} {...links} />
    </div>
)