import React from "react";

import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";



class ListItemForm extends React.Component {
  state = {
    heading: "",
    content: "",
    button: "active"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonClick = () => {
    this.props.handleClick({
      heading: this.state.heading,
      content: this.state.content})
    this.setState({button: "disabled"})
  }

  render() {
    return (
      <div>
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
          id="contentInput"
          label="Content"
          value={this.state.content}
          onChange={this.handleChange}
          margin="normal"
          name="content"
          type="content"
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

export default ListItemForm
