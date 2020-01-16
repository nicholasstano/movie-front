import React, { Component } from 'react'
import './App.css';
import MovieContainer from '../src/containers/MovieContainer.js'
import BoardContainer from '../src/containers/BoardContainer.js'
import VideoContainer from '../src/containers/VideoContainer.js'
import BookContainer from '../src/containers/BookContainer.js'
import AlbumContainer from '../src/containers/AlbumContainer.js'
import TelevisionContainer from '../src/containers/TelevisionContainer.js'
import FormsContainer from '../src/containers/FormsContainer.js'
import NavBar from '../src/containers/NavBar.js'
import Footer from '../src/containers/Footer.js'
import Home from '../src/containers/Home.js'
import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route
            path="/forms"
            render={() => {
              return (
                <div><FormsContainer />
                  <Footer />
                </div>
              )
            }} />
          <Route
            path="/movies"
            render={() => {
              return (
                <div><MovieContainer />
                  <Footer />
                </div>
              )
            }} />
          <Route
            path="/boards"
            render={() => {
              return (
                <div><BoardContainer />
                  <Footer /></div>
              )
            }} />
          <Route
            path="/albums"
            render={() => {
              return (
                <div><AlbumContainer />
                  <Footer /></div>
              )
            }} />
          <Route
            path="/videos"
            render={() => {
              return (
                <div><VideoContainer />
                  <Footer /></div>
              )
            }} />
          <Route
            path="/books"
            render={() => {
              return (
                <div><BookContainer />
                  <Footer /></div>
              )
            }} />
          <Route
            path="/television"
            render={() => {
              return (
                <div><TelevisionContainer />
                  <Footer /></div>
              )
            }} />
          <Route
            path="/"
            render={() => {
              return (
                <div><Home />
                  <Footer />
                </div>
              )
            }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)