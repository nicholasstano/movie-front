import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class MovieSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.movieReviews, "name", this.state.mediaSearch)
    }

    render() {
        let movieReviews = this.searchMedia().map(movie => <div className="mediaTitleMovies" key={movie.id}><div onClick={() => this.props.mediaClickHandler(movie)}>{movie.name}<div className="monthDay">
            ({movie.month_day_watched}/{movie.year_watched})
            </div>
        </div></div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Movies"} />
                </div>
                {movieReviews}
            </div>
        )
    }
}

export default MovieSidebar