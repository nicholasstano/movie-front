import photos from '../../photos/me'
import React from 'react'

export default function NameAndPhoto() {
    return (
        <div>
            <div className="nameAndPhotoHeader">
                <div className="nameAndPhoto">
                    <div><img src={photos.nick} alt="nick" /></div>
                    <div>
                        <h1>Nick Stano</h1>
                        <h1>Full Stack Developer</h1>
                        <h1><a href="https://docs.google.com/document/d/1pr_5DQ7HNGsopysRLOZ6QsA3S_XzAsai89b1fu0DQGs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></h1>
                    </div>
                </div>
                <div className="aboutMe">
                    <div>
                        <p>Hi! I am Nick and I am a Full Stack Developer currently working on the site <a href="https://www.howlforchange.com" rel="noopener noreferrer" target="_blank">Howl For Change</a>. I began learning JavaScript on my own and attended Flatiron School's Software Engineering Program. I have continued working with certain technologies and want to continue learning even more. I am currently open to new opportunities in Full Stack Development.</p>
                    </div>
                    <div>
                        <p>I spent 8.5 years teaching Mathematics in NYC Charter Schools. I currently live in NY with my fiance and our two cats.</p>
                    </div>
                    <div>
                        <p>Welcome to my site where I write reviews when I consume the following media albums, board games, books, movies, tv shows, and video games. One day I may look back and see what I thought of certain things five years ago and see if my opinion has changed. If you want to talk about any media you love or think I would love let's do it. I have included my favorite media below!</p>
                    </div>
                </div>
                <div className="contact">
                    <p><a href="mailto:nicholasstano@gmail.com" target="_blank" rel="noopener noreferrer"><img src={photos.gmail} className="contact-images" alt="gmail" /></a></p>
                    <p><a href="https://github.com/nicholasstano" target="_blank" rel="noopener noreferrer"><img src={photos.github} className="contact-images" alt="github" /></a></p>
                    <p><a href="https://www.linkedin.com/in/nicholas-stano/" target="_blank" rel="noopener noreferrer"><img src={photos.linkedin} className="contact-images" alt="linkedin" /></a></p>
                </div>
            </div>
        </div >
    )
}