import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

<<<<<<< HEAD
const useStyles = makeStyles({
	card: {
		maxWidth: 500
	},
	media: {
		height: 300
	}
})
=======
import { useStyles } from './styles'

import './Assignments.scss'
>>>>>>> 6f4ef911778a831c4397312fbce0a8bebfd2c6f2

const Assignments = (props) => {
	const classes = useStyles()

	console.log('props', props)

	return (
		<div id={'card-1'}>
			<Link to={props.link}>
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia className={classes.media} image={props.image} />
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
