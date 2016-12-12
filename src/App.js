import React, { Component } from 'react';
import './App.css';

class User extends Component {
  constructor (props) {
      super(props)
      this.state = {
        username: '',
        password: '',
        validation: '',
        valid: true
      }
    }

    username (e) {
      this.setState({username: e.target.value})
    }

    password (e) {
      this.setState({password: e.target.value})
    }

    validation (e) {
      this.setState({validation: e.target.value})
    }

    submit (e) {
      e.preventDefault()
      this.checkValidity()
    }

    checkValidity () {
      if (this.state.password === this.state.passwordConfirm) {
          this.setState({ valid: true })
      } else {
        this.setState({ valid: false })
      }
    }

    render () {
      let validText = this.state.valid ? "Valid!" : "Passwords do not match"
      return (
          <div className="User">
            <input onChange={(e) => this.username(e)} type="text" placeholder="username" />
            <br></br>
            <input onChange={(e) => this.password(e)} type="password" placeholder="password" />
            <br></br>
            <input onChange={(e) => this.validation(e)} type="password" placeholder="confirm password" />
            <br></br>
            <input type="submit" onClick={(e) => this.submit(e)} value="submit" />
            <p>{validText}</p>
          </div>
      );
    }
  }

export default User;
