import photos from '../../photos/me'
import React from 'react'

export default function NameAndPhoto() {
    return (
        <div>
            <div className="nameAndPhotoHeader">
                <div className="nameAndPhoto font-weight-light">
                    <div><img src={photos.nick} alt="me" /></div>
                    <div>
                        <h1 className="font-weight-light">Nick Stano</h1>
                        <h5 className="font-weight-light">Full Stack Developer</h5>
                        <h2 className="font-weight-light"><a href="https://docs.google.com/presentation/d/1ZLDseGwmmNtkrRJYVNR4QPti_NFllnYx43MYu8Eoet0/edit?usp=sharing2" target="_blank" rel="noopener noreferrer">Resume</a></h2>
                    </div>
                </div>
                <div className="contact">
                    <p><a href="mailto:nicholasstano@gmail.com" target="_blank" rel="noopener noreferrer"><img src={photos.gmail} className="contact-images" alt="gmail" /></a></p>
                    <p><a href="https://github.com/nicholasstano" target="_blank" rel="noopener noreferrer"><img src={photos.github} className="contact-images" alt="github" /></a></p>
                    <p><a href="https://www.linkedin.com/in/nicholas-stano/" target="_blank" rel="noopener noreferrer"><img src={photos.linkedin} className="contact-images" alt="linkedin" /></a></p>
                </div>
            </div>
        </div>
    )
}