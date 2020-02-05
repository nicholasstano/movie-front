import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { basicUrl } from '../config'
import FormsContainer from './FormsContainer.js'

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
            .then(data => console.log(data))
        // .then(response => response.json())
        // .then(data => {
        //     localStorage.setItem('userId', data.user.id)
        //     this.props.setUser(data.user)
        //     this.props.history.push('/home')
        // })

        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        console.log(this.state)
        console.log(this.state.username === "admin" && this.state.password === "$2a$12$uUoX1wVlO3tIbTCtN.m4/uhJDqbpgJuqDgba6Bvr3EObbmrjmRlIK")
        return (
            this.state.username === "admin" && this.state.password === "$2a$12$uUoX1wVlO3tIbTCtN.m4/uhJDqbpgJuqDgba6Bvr3EObbmrjmRlIK" ? <div><FormsContainer /></div> :
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

        )
    }
}

export default withRouter(LoginContainer)
