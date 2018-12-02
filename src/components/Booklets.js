import React from 'react'

import API from '../API'
import Booklet from './Booklet'
import BookletPreview from './BookletPreview'

import { Route, Switch } from 'react-router-dom'

class Booklets extends React.Component {
  state = {
    booklets: [],
  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  getUserBooklets() {
    API.getUserBooklets()
      .then(data => {
        if (data.error) {
          alert('You are not signed in.')
        } else {
          this.setState({ booklets: data.data })
        }
      })
  }

  handleClick = (id) => {
    this.props.history.push(`/mybooklets/${id}`)
  }

  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push('/login')
    } else {
      this.getUserBooklets()
    }
  }

  render () {
    const { booklets } = this.state
    
    return (
      <div style={this.style} className='user-list'>
       
        { 
          
          <Switch>
            <Route path='/mybooklets/:id' render={props => <Booklet {...props} booklets={booklets} />} />
            <Route path='/mybooklets' render={props => {
              return <>
               <h3>Your Booklets</h3>
               { booklets.length === 0 && <p>You don't have any booklets yet!</p>} 
               {booklets.map(booklet =>
                <BookletPreview key={booklet.id} booklet={booklet} handleClick={this.handleClick}/>
              )}
              </>
            }}/>
          </Switch>
        
      }
      </div>
    )
  }
}

export default Booklets
