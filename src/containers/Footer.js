import React, { Component } from 'react'

export class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button type="button" className="btn-sm btn-light font-weight-light" onClick={() => window.scrollTo(0, 0)}>Top</button>
                </nav>
            </div>
        )
    }
}

export default Footer

