import React, { Component } from 'react'
import './App.css';
import MovieContainer from '../src/containers/MovieContainer.js'
import NavBar from '../src/containers/NavBar.js'
import Home from '../src/containers/Home.js'
import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/movies"
            render={() => {
              return (
                <div><MovieContainer /></div>
              )
            }} />
          <Route
            path="/"
            render={() => {
              return (
                <div><Home /></div>
              )
            }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)