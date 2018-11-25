import React from 'react'

import API from '../API'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SignUpForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    const { username, password } = this.state
    API.signup(username, password)
      .then(data => {
        if (data.error) {
          alert('Nope')
        } else {
          this.props.login(data)
        }
      })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <div>
        <h2>Sign Up</h2>
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          SIGN UP
        </Button>
        <h3>Already have an account?</h3>
        <Button label='Log in' onClick={this.props.loginRoute}>LOG IN</Button>
      </div>
    )
  }
}

export default SignUpForm