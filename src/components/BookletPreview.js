import React from 'react'
import { Link } from 'react-router-dom'

const BookletPreview = props => {
    return(
        <Link to={`mybooklets/${props.booklet.id}`}>{props.booklet.title}</Link>
    )

}

export default BookletPreview