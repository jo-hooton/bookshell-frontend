import React from "react"

import API from "../API"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'

class PageImageForm extends React.Component {
  state = {
    title: "",
    altText: "",
    image: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  savePage = () => {
    const { title, alt_text, image } = this.state
    const { booklet } = this.props
    API.imagePage(title, alt_text, image, booklet.id).then(data => {
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
        <h1>New Cover Image</h1>
        <TextField
          id="headingInput"
          label="Heading"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
          name="heading"
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
          value={this.state.altText}
          onChange={this.handleChange}
          margin="normal"
          name="altText"
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
      </>
  
    )
  }
}

export default PageImageForm;
