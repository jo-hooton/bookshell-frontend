import React from 'react'
import phone from '../images/phone.png'

import PhoneTemplate from './PhoneTemplate'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation'

import logo from '../images/cover-placeholder.jpg';


class MobilePreviewContainer extends React.Component {
    
    // styles = theme => ({
    //     fab: {
    //       margin: theme.spacing.unit,
    //     },
    //     extendedIcon: {
    //       marginRight: theme.spacing.unit,
    //     },
    //   });

    getPages = (booklet) => {
        return booklet.pages.map(page => 
            this.getPageContent(page))

    }

    getPageContent = (page) => {
        return (
                <>
                {page.text_items.map(textItem => 
                <>
                <div className='preview-section'>
                <h2 className="page-heading" >{textItem.heading}</h2>
                <h3 className="purple mobile-sub-heading" >{textItem.sub_heading}</h3>
                <p>{textItem.content}</p>
                </div>
                </>
                )
                }

                {page.lists.map(list => 
                    <>
                    <h2 className="page-heading" >{list.heading}</h2>
                    <h3 className="purple mobile-sub-heading" >{list.sub_heading}</h3>
                    {list.list_items.map(listItem => 
                      <>
                      <h3>{listItem.heading}</h3>
                      <p>{listItem.content}</p>
                      </>  )}
                    </>
                    )}
                {page.galleries.map(gallery => 
                    <>
                    <div className='preview-section'>
                    <h2 className="page-heading" >{gallery.heading}</h2>
                    <h3 className="purple mobile-sub-heading" >{gallery.sub_heading}</h3>
                    </div>
                    {gallery.gallery_items.map(galleryItem => 
                      <>
                      <div className='preview-section'>
                      <img className='cover-image'
                           src={galleryItem.image} 
                           alt={galleryItem.heading}>
                      </img>
                      <h3>{galleryItem.heading}</h3>
                      <p>{galleryItem.sub_heading}</p>
                      </div>
                      </>  )}
                    </>
                )}
                    
                </>
            )
    }

    render () {
    const { booklet, classes } = this.props
    return(
        <>
        <div className='mobile-container' >
            <img className='mobile-preview' src={phone}></img>
            <div className='mobile-preview-content' >
            {booklet.title < 15 ?
                <h1>{booklet.title}</h1>
                :
                <h2>{booklet.title}</h2>
            }
                {booklet.image ?
                    <img className='cover-image'
                         src={booklet.image.url} 
                         alt={booklet.image.title}>
                    </img> 
                    :
                    <img className='cover-image'
                    src={logo} 
                    alt='Cover Image'>
                   </img> 

                }
                {this.getPages(booklet)}
            </div>
        </div>
        </>
    )
  }
}

MobilePreviewContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default MobilePreviewContainer
// export default withStyles(this.styles)(MobilePreviewContainer)