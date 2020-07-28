import React, { Component } from 'react'
import FavoriteMedia from '../components/homeComponents/FavoriteMedia.js'
import NameAndPhoto from '../components/homeComponents/NameAndPhoto.js'
import AboutMe from '../components/homeComponents/AboutMe.js'
import './homeContainer.scss'

export class Home extends Component {

    render() {
        return (
            <div className="homeContainer">
                <div className="homeComponents">
                    <AboutMe />
                    <NameAndPhoto />
                </div>
                <div>
                    <FavoriteMedia />
                </div>
            </div>
        )
    }
}

export default Home
