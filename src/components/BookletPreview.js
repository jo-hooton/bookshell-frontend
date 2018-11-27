import React from 'react'
import { Link } from 'react-router-dom'

const BookletPreview = props => {
    return(
        <Link to={`mybooklets/${props.booklet.id}`}>Booklet Preview</Link>
    )

}

export default BookletPreview