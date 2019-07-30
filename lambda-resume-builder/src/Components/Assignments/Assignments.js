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
           
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={props.image}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {props.assignments.name}
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
            
             </Card>
           
            </Link>

        </div>


    )

}

export default Assignments
