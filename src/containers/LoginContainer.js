import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { basicUrl } from '../config'

export class LoginContainer extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${basicUrl}/login`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                this.props.setUser(data.user.username)
                this.props.history.push('/forms')
                // localStorage.setItem('userId', data.user.id)
            })
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="mediaContainer">
                <div className="login">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label >Username</label>
                            <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginContainer)
