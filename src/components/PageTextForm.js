import React from "react"

import API from "../API"

import TextField from "@material-ui/core/TextField"
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
    const textItem = this.state
    const heading = this.state.heading
    const { booklet } = this.props
    console.log(textItem)
    API.textPage(heading, textItem, booklet.id).then(data => {
      if (data.error) {
        alert("Nope")
      } else {
      this.props.handleTextClick()
      }
    })
  }

  render() {
    return (
      <>
       <div className='page-form'>
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
        <TextField
          id="content"
          multiline
          rows="4"
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
      </div>
      </>
  
    )
  }
}

export default PageTextForm;
