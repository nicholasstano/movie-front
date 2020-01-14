import React, { Component } from 'react'

export class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p onClick={() => window.scrollTo(0, 0)}>
                    back to the front, I mean top...
                </p>
                <p>my name is Nick and I enjoy revisiting media.</p>
            </div>
        )
    }
}

export default Footer

