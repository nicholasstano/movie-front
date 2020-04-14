import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MovieContainer from '../src/containers/MovieContainer.js'
import BoardContainer from '../src/containers/BoardContainer.js'
import VideoContainer from '../src/containers/VideoContainer.js'
import BookContainer from '../src/containers/BookContainer.js'
import AlbumContainer from '../src/containers/AlbumContainer.js'
import TelevisionContainer from '../src/containers/TelevisionContainer.js'
import FormsContainer from '../src/containers/FormsContainer.js'
import LoginContainer from '../src/containers/LoginContainer.js'
import NavBar from '../src/containers/NavBar/NavBar.js'
import Footer from '../src/containers/Footer.js'
import Home from '../src/containers/Home.js'
import { withRouter, Switch, Route } from 'react-router-dom'

export class App extends Component {

  state = { userName: null }

  setUser = u => {
    this.setState({ userName: u })
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          {this.state.userName !== "admin" ?
            <Route
              path="/login"
              render={() => {
                return (
                  <div><LoginContainer setUser={this.setUser} />
                  </div>
                )
              }} /> :
            <Route path="/forms" render={() => { return (<div><FormsContainer /> <Footer /> </div>) }} />}
          <Route path="/movies" render={() => { return (<div><MovieContainer /></div>) }} />
          <Route path="/albums" render={() => { return (<div><AlbumContainer /></div>) }} />
          <Route path="/boards" render={() => { return (<div><BoardContainer /></div>) }} />
          <Route path="/books" render={() => { return (<div><BookContainer /></div>) }} />
          <Route path="/television" render={() => { return (<div><TelevisionContainer /></div>) }} />
          <Route path="/videos" render={() => { return (<div><VideoContainer /></div>) }} />
          <Route path="/" render={() => { return (<div><Home /> <Footer /> </div>) }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)