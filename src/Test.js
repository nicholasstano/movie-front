import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
    apiKey: "AIzaSyDoJ7nzZWAMmlmHFzoQVOIWbJjFGX_nefU",
    authDomain: "my-awesome-test-project-caec4.firebaseapp.com"
})

export class Test extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    render() {
        return (
            <div style={{ padding: "150px" }}>
                {this.state.isSignedIn ? (<>
                    <div style={{ padding: "150px" }}>Signed in!</div>
                    <button onClick={() => firebase.auth().signOut()}>sign out</button>
                </>
                ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()} />
                    )}
            </div>
        )
    }
}

export default Test
