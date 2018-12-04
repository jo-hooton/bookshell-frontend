// import React from 'react'

// import Card from '@material-ui/core/Card';

// const BookletPreview = props => {
//     return(
//         <Link to={`mybooklets/${props.booklet.id}`}>{props.booklet.title}</Link>
//     )

// }

// export default BookletPreview

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import logo from '../images/cover-placeholder.jpg';


const styles = {
  card: {
    maxWidth: 250,
    margin: 30,
  },
  media: {
    // object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
}



const BookletPreview = (props) => {
  const { classes, booklet } = props
  const coverImage = booklet.image ? booklet.image.url : logo
  return (
    <Link to={`mybooklets/${booklet.id}`}>
    <Card className={classes.card} linkTo={`mybooklets/${booklet.id}`} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={booklet.title}
          className={classes.media}
          height="300"
          image={coverImage}
        />
        <CardContent>
          <h2>{booklet.title}</h2>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

BookletPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookletPreview);