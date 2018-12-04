import React from "react"

import API from "../API"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'

class PageImageForm extends React.Component {
  state = {
    title: "",
    image: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  savePage = () => {
    const { title, image } = this.state
    const { booklet,  } = this.props
    API.image(title, image, booklet.id).then(data => {
      if (data.error) {
        alert("Nope")
      } else {
      this.props.handleImageClick()
      this.props.updateBooklets(data)
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
