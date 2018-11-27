import React from 'react'

import MobilePreviewContainer from './MobilePreviewContainer'

import PageImageForm from './PageImageForm'
import PageTextForm from './PageImageForm'
import PageListForm from './PageListForm'
import PageGalleryForm from './PageGalleryForm'

import Button from '@material-ui/core/Button'

class Booklet extends React.Component {

        state = {
          listButton: true,
          textButton: true,
          imageButton: true,
          galleryButton: true
        }

        handleImageClick = () => {
           this.setState({imageButton: !this.state.imageButton})
        }
        
        handleTextClick = () => {
           this.setState({textButton: !this.state.textButton})
        }
      
        handleListClick = () => {
           this.setState({listButton: !this.state.listButton})
        }

        handleGalleryClick = () => {
           this.setState({galleryButton: !this.state.galleryButton})
        }

        render() {
        const booklet = this.props.booklets.find(booklet => booklet.id == this.props.match.params.id)
        console.log(this.props.match.params.id)
        return (
        <>
        <h3>{booklet.title}</h3>
        <MobilePreviewContainer />
        {this.state.imageButton ?
        <Button onClick={this.handleImageClick} color='primary' variant="contained" label='Add Cover Image'>Add Cover Image</Button> :
        <>
        <Button onClick={this.handleImageClick} color='primary' variant="contained" label='Cancel Cover Image'>Cancel Cover Image</Button>
        <PageImageForm booklet_id={this.props.key} booklet={booklet} /> 
        </>
        }
        {this.state.textButton ?
        <Button onClick={this.handleTextClick} color='primary' variant="contained" label='Add Text'>Add Text</Button> :
        <>
        <Button onClick={this.handleTextClick} color='primary' variant="contained" label='Cancel Text'>Cancel Text</Button>
        <PageTextForm booklet_id={this.props.key} booklet={booklet} /> 
        </>
        }
        {this.state.listButton ?
        <Button onClick={this.handleListClick} color='primary' variant="contained" label='Add List'>Add List</Button> :
        <>
        <Button onClick={this.handleListClick} color='primary' variant="contained" label='Cancel List'>Cancel List</Button>
        <PageListForm booklet_id={this.props.key} booklet={booklet} /> 
        </>
        }
        {this.state.galleryButton ?
        <Button onClick={this.handleGalleryClick} color='primary' variant="contained" label='Add Gallery'>Add Gallery</Button> :
        <>
        <Button onClick={this.handleGalleryClick} color='primary' variant="contained" label='Cancel Gallery'>Cancel Gallery</Button>
        <PageGalleryForm booklet_id={this.props.key} booklet={booklet} /> 
        </>
        }
        </>
        )
   }
}

export default Booklet