import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link className="navbar-link" to="/">Home</Link>
                    <Link className="navbar-link" to="/movies">Movie Reviews</Link>
                </div>
            </div>
        )
    }
}

export default NavBar
