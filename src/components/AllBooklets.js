import React from 'react'

import API from '../API'
import Booklet from './Booklet'
import BookletPreview from './BookletPreview'

import { Route, Switch } from 'react-router-dom'

class AllBooklets extends React.Component {
  state = {
    booklets: [],
  }

  style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

  getBooklets() {
    API.getAllBooklets()
      .then(data => {
        if (data.error) {
          alert('No worky')
        } else {
          this.setState({ booklets: data.data })
        }
      })
  }

  handleClick = (id) => {
    this.props.history.push(`/booklets/${id}`)
  }

  componentDidMount() {
      this.getBooklets()
  }

  updateBooklets = (booklets) => {
    this.setState({booklets: booklets})
  }

  render () {
    const { booklets } = this.state
    
    return (
      <div>
       
        { 
          
          <Switch>
            <Route path='/booklets/:id' render={props => <Booklet {...props} updateBooklets={this.updateBooklets} booklets={booklets} />} />
            <Route path='/booklets' render={props => {
              return <>
              <h3>All Published Booklets</h3>
              <div  style={this.style} className='user-list'>
               { booklets.length === 0 && <p>No booklets availabobbles</p>} 
               {booklets.map(booklet => booklet.published && 
                <BookletPreview route="booklets" key={booklet.id} booklet={booklet} handleClick={this.handleClick}/>
              )}
              </div>
              </>
            }}/>
          </Switch>
        
      }
      </div>
    )
  }
}

export default AllBooklets
