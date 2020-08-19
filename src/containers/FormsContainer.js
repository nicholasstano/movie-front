import React, { Component } from 'react'
import AlbumForm from '../components/forms/addForms/AlbumForm.js'
import BoardForm from '../components/forms/addForms/BoardForm.js'
import BookForm from '../components/forms/addForms/BookForm.js'
import MovieForm from '../components/forms/addForms/MovieForm.js'
import TVShowForm from '../components/forms/addForms/TVShowForm.js'
import VideoForm from '../components/forms/addForms/VideoForm.js'

export class FormsContainer extends Component {

    state = {
        albumForm: false,
        boardForm: false,
        bookForm: false,
        movieForm: false,
        tvForm: false,
        videoForm: false,
    }

    toggleAlbumForm = () => {
        this.setState({ albumForm: true, boardForm: false, bookForm: false, movieForm: false, tvForm: false, videoForm: false })
    }
    toggleBoardForm = () => {
        this.setState({ albumForm: false, boardForm: true, bookForm: false, movieForm: false, tvForm: false, videoForm: false })
    }
    toggleBookForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: true, movieForm: false, tvForm: false, videoForm: false })
    }
    toggleMovieForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: false, movieForm: true, tvForm: false, videoForm: false })
    }
    toggleTVForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: false, movieForm: false, tvForm: true, videoForm: false })
    }
    toggleVideoForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: false, movieForm: false, tvForm: false, videoForm: true })
    }

    render() {
        return (
            <div className="">
                <div className="formsSidebar">
                    <ul>
                        <li>
                            <button type="button" onClick={this.toggleAlbumForm}>Albums Form</button>
                        </li>
                        <li>
                            <button type="button" onClick={this.toggleBoardForm}>Board Games Form</button>
                        </li>
                        <li>
                            <button type="button" onClick={this.toggleBookForm}>Books Form</button>
                        </li>
                        <li>
                            <button type="button" onClick={this.toggleMovieForm}>Movies Form</button>
                        </li>
                        <li>
                            <button type="button" onClick={this.toggleTVForm}>TV Shows Form</button>
                        </li>
                        <li>
                            <button type="button" onClick={this.toggleVideoForm}>Video Games Form</button>
                        </li>
                    </ul>
                </div>
                <div className="formsContainer">
                    {this.state.albumForm ? <AlbumForm toggleAlbumForm={this.toggleAlbumForm} /> : null}
                    {this.state.boardForm ? <BoardForm toggleBoardForm={this.toggleBoardForm} /> : null}
                    {this.state.bookForm ? <BookForm toggleBookForm={this.toggleBookForm} /> : null}
                    {this.state.movieForm ? <MovieForm toggleMovieForm={this.toggleMovieForm} /> : null}
                    {this.state.tvForm ? <TVShowForm toggleTVForm={this.toggleTVForm} /> : null}
                    {this.state.videoForm ? <VideoForm toggleVideoForm={this.toggleVideoForm} /> : null}
                </div>
            </div>
        )
    }
}

export default FormsContainer