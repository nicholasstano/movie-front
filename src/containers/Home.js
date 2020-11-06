import React, { Component } from 'react'
import FavoriteMedia from '../components/homeComponents/FavoriteMedia.js'
import AboutMe from '../components/homeComponents/AboutMe.js'
import './homeContainer.scss'

export class Home extends Component {

    render() {
        return (
            <div className="homeContainer">
                <div className="homeComponents">
                    <AboutMe />
                </div>
                <div>
                    <FavoriteMedia />
                </div>
            </div>
        )
    }
}

export default Home
