import React from 'react'
import Desc from './Desc'
import Images from './Images'
import '../styles.css'

export const Project = (project) => (
    <div className="project-container">
        <Images imageUrls={project.imageUrls} />
        <Desc {...project} />
    </div>
)