import React, { Component } from 'react'

export class Footer extends Component {

    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <p onClick={() => window.scrollTo(0, 0)}>
                        back to the front, I mean top...
                </p>
                </nav>
            </div>
        )
    }
}

export default Footer

