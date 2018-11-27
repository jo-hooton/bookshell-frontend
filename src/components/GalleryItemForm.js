import React from "react";

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'



class GalleryItemForm extends React.Component {
  state = {
    image: "",
    heading: "",
    subHeading: "",
    button: "active"
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  buttonClick = () => {
    this.props.handleClick({
      image: this.state.image,
      heading: this.state.heading,
      subHeading: this.state.subHeading})
    this.setState({button: "disabled"})
  }

  render() {
    return (
      <div>
        <TextField 
          id="imageInput"
          label="Image URL"
          value={this.state.image}
          onChange={this.handleChange}
          margin="normal"
          name="image"
          type="image"
        />
        <br />
        <TextField
          id="headingInput"
          label="Heading"
          value={this.state.heading}
          onChange={this.handleChange}
          margin="normal"
          name="heading"
          type="heading"
        />
        <br />
        <TextField
          id="subHeadingInput"
          label="Sub Heading"
          value={this.state.content}
          onChange={this.handleChange}
          margin="normal"
          name="subHeading"
          type="subHeading"
        />
        <br />
        <div>
        {this.state.button === 'active' ?
        <Button 
          onClick={
              () => this.buttonClick()
          }
        >
          Save
        </Button>
        :
        <Button disabled>Saved</Button>
        }
        </div>
      </div>
    );
  }
}

export default GalleryItemForm
