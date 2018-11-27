import React from "react"

import API from "../API"

import TextField from "@material-ui/core/TextField"
import TextArea from "@material-ui/core/TextArea"
import Button from '@material-ui/core/Button'

class PageTextForm extends React.Component {
  state = {
    heading: "",
    subHeading: "",
    content: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  savePage = () => {
    const { heading, subHeading, content } = this.state
    const { booklet } = this.props
    API.textPage(heading, heading, subHeading, content, booklet.id).then(data => {
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
        <h1>New Text Item</h1>
        <TextField
          id="headingInput"
          label="Heading"
          value={this.state.heading}
          onChange={this.handleChange}
          margin="normal"
          name="heading"
        />
        <br />
        <TextField
          id="subHeading"
          label="Sub Heading"
          value={this.state.subHeading}
          onChange={this.handleChange}
          margin="normal"
          name="subHeading"
        />
        <br />
        <TextArea
          id="content"
          label="Content"
          value={this.state.content}
          onChange={this.handleChange}
          margin="normal"
          name="content"
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

export default PageTextForm;
