import React from 'react'
import './Assignments.scss'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 500,
    
    },
    media: {
      height: 300,
     
    },
  });

const Assignments = props => {
    const classes = useStyles();
    console.log('props', props)
    return (

        <div className={'card-1'}>
            <Link to={props.link}>
            {/* <img alt='' src={props.image} style={{ height: '250PX', width: '98.5%', margin: '.5%', borderRadius: '15px 15px 0 0 ', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }} />
            <hr />
            <h4 ><strong>{props.assignments.name}</strong> </h4> */}
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={props.image}
                    // title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {props.assignments.name}
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions> */}
             </Card>
           
            </Link>

        </div>


    )

}

export default Assignments
