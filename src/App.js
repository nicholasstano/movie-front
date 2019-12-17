import React, { Component } from 'react'
import './App.css';
import MovieContainer from '../src/containers/MovieContainer.js'
import MovieForm from '../src/components/MovieForm.js'


export class App extends Component {
  state = { movieReviews: [] }

  componentDidMount() {
    if (this.state) {
      fetch('http://localhost:3000/api/v1/movies')
        .then(response => response.json())
        .then(movies => this.setState({ movieReviews: movies.reverse() }));
    }
  }

  addNewMovie = function (movie) {
    const newMovie = movie
    this.setState({
      movieReviews: [newMovie, ...this.state.movieReviews],
    })
  }

  handleFormSubmit = (movie) => {
    fetch('http://localhost:3000/api/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: movie.name,
        month_day_watched: movie.monthWatched,
        year_watched: movie.yearWatched,
        notes: movie.notes,
        director: movie.director,
        year: movie.year,
        rating: movie.rating,
        image: movie.image
      })
    }).then(response => response.json())
      .then(movie => this.addNewMovie(movie)
      )
  }

  render() {
    return (
      <div>
        <MovieForm handleFormSubmit={this.handleFormSubmit} />
        <MovieContainer movieReviews={this.state.movieReviews} />
      </div>
    )
  }
}

export default App