import React, { Component } from 'react'
import './App.css';
import Movie from '../src/components/Movie.js'
import MovieForm from '../src/components/MovieForm.js'


export class App extends Component {
  state = { movieReviews: [] }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/movies')
      .then(response => response.json())
      .then(movies => this.setState({ movieReviews: movies }));
  }

  handleFormSubmit(movie) {
    fetch('http://localhost:3000/api/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movie: { name: movie.name, notes: movie.notes } })
    }).then(response => response.json())
      .then(movie => this.addNewMovie(movie))
  }

  addNewMovie(movie) {
    this.setState({
      movieReviews: [...this.state.movieReviews, movie]
    })
  }

  render() {
    console.log(this.state.movieReviews)
    return (
      <div>
        <MovieForm handleFormSubmit={this.handleFormSubmit} />
        <Movie movieReviews={this.state.movieReviews} />
      </div>
    )
  }
}

export default App