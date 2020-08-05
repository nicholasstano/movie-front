import React, { Component } from 'react'
import AlbumContainer from '../src/containers/MediaContainers/AlbumContainer.js'
import BoardContainer from './containers/MediaContainers/BoardContainer.js'
import BookContainer from './containers/MediaContainers/BookContainer.js'
import MovieContainer from './containers/MediaContainers/MovieContainer.js'
import TelevisionContainer from './containers/MediaContainers/TelevisionContainer.js'
import VideoContainer from './containers/MediaContainers/VideoContainer.js'
import FormsContainer from '../src/containers/FormsContainer.js'
import LoginContainer from './containers/LoginContainer.js'
import NavBar from '../src/containers/NavBar/NavBar.js'
import Home from '../src/containers/Home.js'
import { withRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { basicUrl } from '../src/config'
import store from './store'
// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

export class App extends Component {

  state = { user: null }

  setUser = u => {
    if (u != null) {
      this.setState({ user: u })
    }
    else {
      localStorage.removeItem('userId')
      this.setState({ user: null })
    }
  }

  componentDidMount() {
    this.autoLogin()
  }

  autoLogin() {
    let userId = localStorage.getItem('userId')
    console.log(userId)
    if (userId) {
      fetch(`${basicUrl}/autologin`, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: userId
          // Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setUser(data)
        })
    }
  }

  render() {
    console.log(this.state.user)
    return (
      <Provider store={store}>

        <div className="app">
          <NavBar />
          <Switch>
            {/* {this.state.user && this.state.user.username !== "admin" ? */}
            <Route
              path="/login"
              render={() => {
                return (
                  <div><LoginContainer setUser={this.setUser} /></div>)
              }} />
            {/* : */}
            <Route path="/forms" render={() => { return (<div><FormsContainer /></div>) }} />
            {/* } */}
            <Route path="/movies" render={() => { return (<div><MovieContainer /></div>) }} />
            <Route path="/albums" render={() => { return (<div><AlbumContainer /></div>) }} />
            <Route path="/boards" render={() => { return (<div><BoardContainer /></div>) }} />
            <Route path="/books" render={() => { return (<div><BookContainer /></div>) }} />
            <Route path="/television" render={() => { return (<div><TelevisionContainer /></div>) }} />
            <Route path="/videos" render={() => { return (<div><VideoContainer /></div>) }} />
            <Route path="/" render={() => { return (<div><Home /> </div>) }} />
          </Switch>
        </div>
      </Provider>
    )
  }
}

export default withRouter(App)