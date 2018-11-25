import React from 'react'

import API from '../API'
import Booklet from './Booklet'

class Booklets extends React.Component {
  state = {
    booklets: []
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
          alert('You are not signed in, person.')
        } else {
          this.setState({ booklets: data })
        }
      })
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
        <h3>Your Booklets</h3>
        { booklets.length === 0 && <p>You don't have any booklets yet!</p>}
        {
          booklets.map(booklet =>
            <Booklet key={booklet.id} booklet={booklet} />
          )
        }
      </div>
    )
  }
}

export default Booklets
