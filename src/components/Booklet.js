import React from 'react'

import PageListForm from './PageListForm'

import Button from '@material-ui/core/Button'

class Booklet extends React.Component {

        state = {
          listButton: true
        }

        handleListClick = () => {
          this.setState({listButton: !this.state.listButton})
        }

        render() {
        // const booklet = props.userBooklets.find(booklet => booklet.id === 9)

        return (
        <>
        <h3>x</h3>
        {this.state.listButton ?
        <Button onClick={this.handleListClick} color='primary' variant="contained" label='Add List'>Add List</Button> :
        <>
        <Button onClick={this.handleListClick} color='primary' variant="contained" label='Cancel List'>Cancel List</Button>
        <PageListForm booklet_id={this.props.key} /> 
        </>
        }
        </>
        )
   }
}

export default Booklet