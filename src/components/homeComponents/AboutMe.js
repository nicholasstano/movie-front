import React from 'react'
import photos from '../../photos/me/index'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import './home.scss'

export default function AboutMe() {
    return (
        <div className="aboutMeParagraph">
            <div>
                <p>Hi I am Nicholas Stano, a Full Stack Developer. Welcome to my site, Onats Media. I created this site to keep notes on media I consume. If you enjoy talking media let me know. I've included my favorite Media below!</p>
                <img src={photos.nick} alt='me' />
            </div>
            <div>
                <p>I am currently working on the site <a href="https://www.yourgesture.com/" rel="noopener noreferrer" target="_blank">Gesture</a> as a ReactJS Developer Intern. My team and I are launching the second version of the site and adding mobile responsiveness.</p>
                <img src={photos.gesture} alt='gesture' />
            </div>
            <div>
                <p>I am also working for <a href="https://www.callplaybook.com/" rel="noopener noreferrer" target="_blank">Playbook Sports</a> as a Wordpress Specialist. I build the Front End Pages for Youth Sports Leagues using Wordpress.</p>
                <img src={photos.playbooksports} alt='playbooksports' />
            </div>
            <div>
                <p>I spent five months working on the site <a href="https://www.howlforchange.com" rel="noopener noreferrer" target="_blank">Howl For Change</a>. I spent time improving the user login flow and the user profile view.</p>
                <img src={photos.howlforchange} alt='howlforchange' />
            </div>
            <div>
                <p>I am working on cataloging the movies I own and have watched from the year 2014. I used NodeJS, Express and MongoDB for the back end and React for the front end. You can view the first version of the site <a href="https://movie-catalog-stano.netlify.app/" rel="noopener noreferrer" target="_blank">here</a>.</p>
                <img src={photos.moviecatalog} alt='moviecatalog' />
            </div>
            <div className="contactMe">
                <h1>Social Media Links for Contact.</h1>
                <ul>
                    <a href="https://docs.google.com/document/d/1pr_5DQ7HNGsopysRLOZ6QsA3S_XzAsai89b1fu0DQGs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a href="mailto:nicholasstano@gmail.com" target="_blank" rel="noopener noreferrer"><MailOutlineIcon /></a>
                    <a href="https://github.com/nicholasstano" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/nicholas-stano/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                </ul>
            </div>
        </div>
    )
}