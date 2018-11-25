import React from 'react'

import API from '../API'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    const { username, password } = this.state
    API.login(username, password)
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
        <h2>Log In</h2>
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
          LOG IN
        </Button>
        <h3>Don't have an account?</h3>
        <Button label='Sign Up' onClick={this.props.signUpRoute}>SIGN UP</Button>
      </div>
    )
  }
}

export default LoginForm
