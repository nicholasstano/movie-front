import React, { Component } from 'react'
import './App.css';
import MovieContainer from '../src/containers/MovieContainer.js'

export class App extends Component {

  render() {
    return (
      <div>
        <MovieContainer />
      </div>
    )
  }
}

export default App