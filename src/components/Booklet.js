import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import MobilePreviewContainer from './MobilePreviewContainer'
import PageImageForm from './PageImageForm'
import EditImageForm from './EditImageForm'
import PageTextForm from './PageTextForm'
import PageListForm from './PageListForm'
import PageGalleryForm from './PageGalleryForm'

import Button from '@material-ui/core/Button'
import API from '../API';

class Booklet extends React.Component {

        state = {
          listButton: true,
          textButton: true,
          imageButton: true,
          galleryButton: true,
          booklet: {pages: []}
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

        publishBooklet = () => {
           API.publishBooklet(this.state.booklet.id)
           .then((resp) => {
              this.props.updateBooklets(resp)
              console.log(resp)
              this.setState({
               booklet: resp.data.find(booklet => booklet.id == this.props.match.params.id) 
             })
            })
        }


        componentDidMount = () => {
           console.log("booklets at componentdidmount", this.props.booklets)
           this.setState({booklet: this.props.booklets.find(booklet => booklet.id == this.props.match.params.id) })
        }

        render() {
        const { imageButton, textButton, listButton, galleryButton, booklet, published } = this.state
        const { handleImageClick, handleTextClick, handleListClick, handleGalleryClick } = this
        // const booklet = this.props.booklets.find(booklet => booklet.id == this.props.match.params.id)
        // console.log(this.props.match.params.id)
        
        return (
        <>
       
        <div id='booklet'>
        {this.props.match.path.includes('mybooklets') &&
        <div className='forms-container'>
        <h1 className='booklet-title'>{this.state.booklet.title}</h1>
        {
            imageButton && textButton && listButton && galleryButton &&
            <>
            <div className='button-container' >
            {booklet.image?
            <Button onClick={handleImageClick} color='primary' variant="contained" label='Edit Cover Image'>Edit Cover Image</Button>
            :
            <Button onClick={handleImageClick} color='primary' variant="contained" label='Add Cover Image'>Add Cover Image</Button>
            } 
            <Button onClick={handleTextClick} color='primary' variant="contained" label='Add Text'>Add Text</Button>
            <Button onClick={handleListClick} color='primary' variant="contained" label='Add List'>Add List</Button> 
            <Button onClick={handleGalleryClick} color='primary' variant="contained" label='Add Gallery'>Add Gallery</Button> 
            </div>
            </> 
            
        }
        {

            imageButton ||
            <>
            <Button className='button-container' onClick={handleImageClick} color='primary' variant="contained" label='Cancel Cover Image'>Cancel Cover Image</Button>
            {booklet.image ?
            <EditImageForm updateBooklets={this.props.updateBooklets} booklet={booklet} handleImageClick={handleImageClick} /> 
            :
            <PageImageForm updateBooklets={this.props.updateBooklets} booklet_id={this.props.key} booklet={booklet} handleImageClick={handleImageClick} /> }
            </>
        }
        {
            textButton ||
            <>
            <Button className='button-container' onClick={handleTextClick} color='primary' variant="contained" label='Cancel Text'>Cancel Text</Button>
            <PageTextForm booklet_id={this.props.key} booklet={booklet} handleTextClick={handleTextClick} /> 
            </>
        }
        {
            listButton ||
            <>
            <Button className='button-container' onClick={handleListClick} color='primary' variant="contained" label='Cancel List'>Cancel List</Button>
            <PageListForm booklet_id={this.props.key} booklet={booklet} handleListClick={handleListClick} /> 
            </>
        }
        {
            galleryButton ||
            <>
            <Button className='button-container' onClick={handleGalleryClick} color='primary' variant="contained" label='Cancel Gallery'>Cancel Gallery</Button>
            <PageGalleryForm booklet_id={this.props.key} booklet={booklet} handleGalleryClick={handleGalleryClick} /> 
            </>
        }
        {   booklet.published ?
        <Button className='button-container' onClick={this.publishBooklet} color='secondary' variant="contained" label='Publish Booklet'>Unpublish Booklet</Button> :
        <Button className='button-container' onClick={this.publishBooklet} color='secondary' variant="contained" label='Publish Booklet'>Publish Booklet</Button>
        }
        </div>
        }
        <div>
        <MobilePreviewContainer booklet={booklet} />
        </div>
        </div>
        </>
        )
   }
}

export default Booklet