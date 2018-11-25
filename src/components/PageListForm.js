import React from "react"

import ListItemForm from "ListItemForm"
import API from "../API"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'

class PageListForm extends React.Component {
  state = {
    heading: "",
    subHeading: "",
    listItems: [],
    numItems: 1
  }

  addItem = () => {
    this.setState({
      numItems: (this.state.numItems += 1)
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleItemClick = item => {
    this.setState({
      listItems: [...this.state.listItems, item]
    })
  }

  showListItemForm = () => {
    let counter = 0
    let itemArr = []
    for (counter; counter < this.state.numItems; counter++) {
      itemArr.push(
        <ListItemForm handleClick={this.handleItemClick} />
      )
    }
    return itemArr
  }

  savePage = () => {
    const { title, heading, sub_heading, listItems } = this.state
    API.savePage(title, heading, sub_heading, listItems).then(data => {
      if (data.error) {
        alert("Nope")
      } else {
      null
      // something about errors
      }
    });
  };

  render() {
    return (
      <>
        <h1>New List</h1>
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
          id="subHeadingInput"
          label="Sub Heading"
          value={this.state.subHeading}
          onChange={this.handleChange}
          margin="normal"
          name="subHeading"
        />
        <br />
        <h2>List Items</h2>
        {this.showListItemForm()}
        <Button
          onClick={this.addItem}
          variant="contained"
          color="primary"
        >
          Add Another Item
        </Button>
        <div>
        <Button
          onClick={() => this.savePage()}
          variant="contained"
          color="primary"
        >
          Save CV
        </Button>
        </div>
      </>
  
    )
  }
}

export default PageListForm;
