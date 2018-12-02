import React from 'react'
import phone from '../images/phone.png'

import PhoneTemplate from './PhoneTemplate'

class MobilePreviewContainer extends React.Component {
    
    getPages = (booklet) => {
        console.log("booklet in getPages", booklet.pages)
        return booklet.pages.map(page => 
            this.getPageContent(page))

    }

    getPageContent = (page) => {
        return (
                <>
                {page.images.map(image => 
                    <img className='cover-image'
                         src={image.url} 
                         alt={image.title}>
                         </img> 
                )}
                {page.text_items.map(textItem => 
                <>
                <h3>{textItem.heading}</h3>
                <h5>{textItem.sub_heading}</h5>
                <p>{textItem.content}</p>
                </>
                )
                }
                <p>____________________</p>
                {page.lists.map(list => 
                    <>
                    <h3>{list.heading}</h3>
                    <h5>{list.sub_heading}</h5>
                    {list.list_items.map(listItem => 
                      <>
                      <h5>{listItem.heading}</h5>
                      <p>{listItem.content}</p>
                      </>  )}
                    </>
                    )}
                    
                </>
            )
    }

    render() {
    const { booklet } = this.props
    console.log(booklet.pages)
    return(
        <>
        <div className='mobile-container' >
            <img className='mobile-preview' src={phone}></img>
            <div className='mobile-preview-content' >
                <h1>{booklet.title}</h1>
                {this.getPages(booklet)}
            </div>
        </div>
        </>
    )
  }
}

export default MobilePreviewContainer