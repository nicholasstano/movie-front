import React, { Component } from 'react'
import FavoriteMedia from '../components/homeComponents/FavoriteMedia.js'
import NameAndPhoto from '../components/homeComponents/NameAndPhoto.js'
import AboutMe from '../components/homeComponents/AboutMe.js'

export class Home extends Component {

    render() {
        return (
            <div className="homeContainer">
                <AboutMe />
                <NameAndPhoto />
                {/* <FavoriteMedia /> */}
            </div>
        )
    }
}

export default Home
