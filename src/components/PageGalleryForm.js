import React from "react"

import GalleryItemForm from "./GalleryItemForm"
import API from "../API"

import TextField from "@material-ui/core/TextField"
import Button from '@material-ui/core/Button'

class PageGalleryForm extends React.Component {
  state = {
    heading: "",
    subHeading: "",
    galleryItems: [],
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
      galleryItems: [...this.state.galleryItems, item]
    })
  }

  showGalleryItemForm = () => {
    let counter = 0
    let itemArr = []
    for (counter; counter < this.state.numItems; counter++) {
      itemArr.push(
        <GalleryItemForm handleClick={this.handleItemClick} />
      )
    }
    return itemArr
  }

  savePage = () => {
    const { heading, subHeading, galleryItems } = this.state
    const { booklet } = this.props
    API.galleryPage(heading, heading, subHeading, galleryItems, booklet.id).then(data => {
      if (data.error) {
        alert("Nope")
      } else {
      this.props.handleGalleryClick()
      }
    })
  }

  render() {
    return (
      <>
       <div className='page-form'>
        <h1>New Image Gallery</h1>
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
        <h2>Gallery Items</h2>
        {this.showGalleryItemForm()}
        <Button
          onClick={this.addItem}
          variant="contained"
          color="primary"
        >
          Add Another Image
        </Button>
        <div>
        <Button
          onClick={() => this.savePage()}
          variant="contained"
          color="primary"
        >
          Save Gallery
        </Button>
        </div>
      </div>
      </>
  
    )
  }
}

export default PageGalleryForm;
