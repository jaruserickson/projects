import React from 'react'
import {
    TiSocialLastFm, 
    TiDocumentText
} from 'react-icons/lib/ti'
import { 
    IoSocialInstagram,
    IoSocialLinkedin,
    IoSocialOctocat,
} from 'react-icons/lib/io'
import './styles.css'

export default ({github, instagram, linkedin, resume, lastfm}) => (
    <div className={'soccontainer'}>
        <p>
        {
            github && (
                <a className="button" href={`https://github.com/${github}`}>
                    <span> <IoSocialOctocat color={'white'} size={20}/> </span>
                </a>
            )
        }

        {
            linkedin && (
                <a className="button" href={`https://linkedin.com/in/${linkedin}`}>
                    <span> <IoSocialLinkedin color={'white'} size={20}/> </span>
                </a>
            )
        }

        {
            instagram && (
                <a className="button" href={`https://instagram.com/${instagram}`}>
                    <span> <IoSocialInstagram color={'white'} size={20}/> </span>
                </a>
            )
        }

        {
            lastfm && (
                <a className="button" href={`https://last.fm/user/${lastfm}`}>
                    <span> <TiSocialLastFm color={'white'} size={25}/> </span>
                </a>
            )
        }
        </p>
    </div>
)