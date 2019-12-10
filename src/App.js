import React, { Component } from 'react'
import './App.css';
import Movie from '../src/components/Movie.js'
import MovieForm from '../src/components/MovieForm.js'


export class App extends Component {
  state = { movieReviews: [] }

  componentDidMount() {
    if (this.state) {
      fetch('http://localhost:3000/api/v1/movies')
        .then(response => response.json())
        .then(movies => this.setState({ movieReviews: movies }));
    }
  }

  addNewMovie = function (movie) {
    const newMovie = movie
    this.setState({
      movieReviews: [...this.state.movieReviews, newMovie],
    })
  }

  handleFormSubmit = (movie) => {
    fetch('http://localhost:3000/api/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: movie.name, notes: movie.notes })
    }).then(response => response.json())
      .then(movie =>
        this.addNewMovie(movie)
      )
  }

  render() {
    return (
      <div>
        <MovieForm handleFormSubmit={this.handleFormSubmit} />
        <Movie movieReviews={this.state.movieReviews} />
      </div>
    )
  }
}

export default App