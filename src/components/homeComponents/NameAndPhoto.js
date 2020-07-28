import React from 'react'
import photos from '../../photos/me'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import './home.scss'

export default function NameAndPhoto() {
    return (
        <div className="nameAndPhotoHome">
            <p className="myName">Nick Stano</p>
            <div className="myPhoto"><img src={photos.nick} alt="nick" /></div>
            <div className="wikiColumns">
                <p>Occupation</p>
                <h6>Full Stack Developer</h6>
            </div>
            <div className="wikiColumns">
                <p>Resume</p>
                <a href="https://docs.google.com/document/d/1pr_5DQ7HNGsopysRLOZ6QsA3S_XzAsai89b1fu0DQGs/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><InsertDriveFileIcon /></a>
            </div>
            <div className="wikiColumns">
                <p>Email</p>
                <a href="mailto:nicholasstano@gmail.com" target="_blank" rel="noopener noreferrer"><img src={photos.gmail} className="contact-images" alt="gmail" /></a>
            </div>
            <div className="wikiColumns">
                <p>GitHub</p>
                <a href="https://github.com/nicholasstano" target="_blank" rel="noopener noreferrer"><img src={photos.github} className="contact-images" alt="github" /></a>
            </div>
            <div className="wikiColumns">
                <p>LinkedIn</p>
                <a href="https://www.linkedin.com/in/nicholas-stano/" target="_blank" rel="noopener noreferrer"><img src={photos.linkedin} className="contact-images" alt="linkedin" /></a>
            </div>
        </div>
    )
}