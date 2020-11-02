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
import { connect } from 'react-redux'
import { basicUrl } from '../src/config'
import { AUTO_LOGIN } from '../src/components/actions/types'
import { setLogin } from '../src/components/actions/userActions.js'
import SidebarPopup from './containers/Sidebar/SidebarPopup.js'
import './App.css';

export class App extends Component {

  state = { sidebarOpen: false }

  toggleSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  componentDidMount() {
    this.autoLogin()
  }

  autoLogin() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(`${basicUrl}/autologin`, {
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          this.props.setLogin(AUTO_LOGIN, data)
        })
    }
  }

  render() {
    const { user } = this.props.user
    return (
      <div className="app">
        <SidebarPopup toggleSidebar={this.toggleSidebar} show={this.state.sidebarOpen}/>
        <NavBar toggleSidebar={this.toggleSidebar} show={this.state.sidebarOpen}/>
        <Switch>
          {user && user.username === 'admin' &&
            <Route path="/forms" render={() => { return (<div><FormsContainer /></div>) }} />}
          <Route path="/login" render={() => { return (<div><LoginContainer setUser={this.setUser} /></div>) }} />
          <Route path="/movies" render={() => { return (<div><MovieContainer /></div>) }} />
          <Route path="/albums" render={() => { return (<div><AlbumContainer /></div>) }} />
          <Route path="/boards" render={() => { return (<div><BoardContainer /></div>) }} />
          <Route path="/books" render={() => { return (<div><BookContainer /></div>) }} />
          <Route path="/television" render={() => { return (<div><TelevisionContainer /></div>) }} />
          <Route path="/videos" render={() => { return (<div><VideoContainer /></div>) }} />
          <Route path="/" render={() => { return (<div><Home /> </div>) }} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps, { setLogin })(App))
