import React from 'react'
import {
    FaGithubAlt,
    FaExternalLink
} from 'react-icons/lib/fa'
import '../styles.css'

export default ({github, url}) => (
    <span>
        {
            url && (
                <a style={{paddingRight: 10}} href={url} target="_blank">
                    <FaExternalLink size={18} color={"white"}/>
                </a>
            )
        }
        {
            github && (
                github.map((link) => (
                    <a style={{paddingRight: 10}} href={link} target="_blank">
                        <FaGithubAlt size={20} color={"white"}/>
                    </a>
                ))
            )
        }
    </span>
)