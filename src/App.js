import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, withRouter, Switch } from 'react-router-dom'

import API from './API'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Booklets from './components/Booklets'
import Booklet from './components/Booklet'
import NewBookletForm from './components/NewBookletForm'

import './App.css';



class App extends Component {

  state = {
    username: null,
    userBooklets: []
  }

  login = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username })
    this.props.history.push('/mybooklets')
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ username: null })
    this.props.history.push('/login')
  }

  createBooklet = () => {
    this.props.history.push('/createbooklet')
  }

  signUpRoute = () => {
    this.props.history.push('/signup')
  }

  loginRoute = () => {
    this.props.history.push('/login')
  }

  myBooklets = () => {
    this.props.history.push('/mybooklets')
  }

  addUserBooklet = (booklet) => {
    this.setState({userBooklets: [...this.state.userBooklets, booklet]}, this.props.history.push(`/mybooklets/${booklet.id}`))
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) return
    API.validate()
      .then(user => {
        this.login(user)
      })
      .catch(error => this.props.history.push('/login'))
  }

  render() {
    const { username, userBooklets } = this.state
    const { login, logout, createBooklet, addUserBooklet, signUpRoute, loginRoute, myBooklets } = this
    return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
      <Header username={username} logout={logout} createBooklet={createBooklet} signUpRoute={signUpRoute} loginRoute={loginRoute} myBooklets={myBooklets} />
      <Switch>
      <Route path='/login' render={props => <LoginForm {...props} login={login} signUpRoute={signUpRoute} />} />
      <Route path='/signup' render={props => <SignUpForm {...props} login={login} loginRoute={loginRoute} />} />
      <Route path='/createbooklet' render={props => <NewBookletForm {...props} addUserBooklet={addUserBooklet}/>} />
      <Route path='/' render={props => <Booklets {...props} username={username} />} />
      </ Switch>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App)

