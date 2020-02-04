import React, { Component } from 'react'

export class Home extends Component {

    render() {
        return (
            <div className="mediaContainer">
                <p>Hello! My name is Nick and I enjoy revisiting media.</p>
                <div className="tooManyTimesImages">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c5/Trans-Europe_Express_American.jpg" alt="trans europa express" />
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" alt="harry potter book 1" />
                    <img src="https://upload.wikimedia.org/wikipedia/en/8/89/Brood_War_box_art_%28StarCraft%29.jpg" alt="broodwar" />
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg" alt="spider-man homecoming" />
                </div>
            </div>
        )
    }
}

export default Home
