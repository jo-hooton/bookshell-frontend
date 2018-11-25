import React from "react"

import API from "../API"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'

class NewBookletForm extends React.Component {
    state = {
        title: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
      }

    saveBooklet = () => {
        const title = this.state.title
        API.newBooklet(title)
        .then(data => {
            if (data.error) {
                alert('Nope')
            } else {
               this.props.addUserBooklet(data)
            }
        })
    }

    render() {
        return (
            <>
            <h1>Create New Booklet</h1>

            <TextField
            id="TitleInput"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange}
            margin="normal"
            name="title"
            />
           
            <Button
            onClick={() => this.saveBooklet()}
            variant="contained"
            color="primary"
            >
            Create
            </Button>
            </>
        )
    }
    
}

export default NewBookletForm