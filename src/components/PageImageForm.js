import React from "react"

import API from "../API"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'

class PageImageForm extends React.Component {
  state = {
    title: "",
    imageTitle: "",
    image: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  savePage = () => {
    const coverImage = this.state
    const title = this.state.title
    const { booklet } = this.props
    API.imagePage(title, coverImage, booklet.id).then(data => {
      if (data.error) {
        alert("Nope")
      // } else {
      // null
      // // something about errors
      }
    })
  }

  render() {
    return (
      <>
      <div className='page-form'>
        <h1>New Cover Image</h1>
        <TextField
          id="headingInput"
          label="Heading"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
          name="title"
        />
        <br />
        <TextField
          id="image"
          label="Image URL"
          value={this.state.image}
          onChange={this.handleChange}
          margin="normal"
          name="image"
        />
        <br />
        <TextField
          id="altTextInput"
          label="Alt Text"
          value={this.state.imageTitle}
          onChange={this.handleChange}
          margin="normal"
          name="imageTitle"
        />
        <br />
        <div>
        <Button
          onClick={() => this.savePage()}
          variant="contained"
          color="primary"
        >
          Save Page
        </Button>
        </div>
      </div>
      </>
  
    )
  }
}

export default PageImageForm;
