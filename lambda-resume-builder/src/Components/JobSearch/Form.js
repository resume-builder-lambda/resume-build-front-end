import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Input, InputLabel, MenuItem, FormControl, Select, Button, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	}
}));

const Form = (props) => {
	const classes = useStyles();

	const [values, setValues] = useState({
		company: '',
		position: '',
		location: '',
		applied: '',
		interview: '',
		offer: ''
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addRow(values);
		setValues({
			company: '',
			position: '',
			location: '',
			applied: '',
			interview: '',
			offer: ''
		});
	};

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	return (
		<div style={{ margin: '25px', fontSize: '13px' }}>
			<form onSubmit={(event) => handleSubmit(event)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Input
					style={{ marginBottom: '15px', width: '250px' }}
					placeholder="Company"
					name="company"
					required
					className={classes.input}
					onChange={(event) => handleChange(event)}
					value={values.company}
					inputProps={{
						'aria-label': 'Description'
					}}
				/>
				<Input
					style={{ marginBottom: '15px', width: '250px' }}
					placeholder="Position"
					name="position"
					className={classes.input}
					onChange={(event) => handleChange(event)}
					value={values.position}
					inputProps={{
						'aria-label': 'Description'
					}}
				/>

				<Input
					style={{ marginBottom: '15px', width: '250px' }}
					placeholder="Location"
					name="location"
					className={classes.input}
					onChange={(event) => handleChange(event)}
					value={values.location}
					inputProps={{
						'aria-label': 'Description'
					}}
				/>

				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="applied-check">Applied</InputLabel>
					<Select
						style={{ marginBottom: '15px', width: '150px' }}
						value={values.applied}
						name="applied"
						onChange={(event) => handleChange(event)}
						inputProps={{
							name: 'applied',
							id: 'applied-check'
						}}
					>
						<MenuItem value={'Yes'}>Yes</MenuItem>
						<MenuItem value={'No'}>No</MenuItem>
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="interview-check">Interview</InputLabel>
					<Select
						style={{ marginBottom: '15px', width: '150px' }}
						value={values.interview}
						name="interview"
						onChange={(event) => handleChange(event)}
						inputProps={{
							name: 'interview',
							id: 'interview-check'
						}}
					>
						<MenuItem value={'Yes'}>Yes</MenuItem>
						<MenuItem value={'No'}>No</MenuItem>
					</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="offer-check">Offer</InputLabel>
					<Select
						style={{ marginBottom: '15px', width: '150px' }}
						value={values.offer}
						name="offer"
						onChange={(event) => handleChange(event)}
						inputProps={{
							name: 'offer',
							id: 'offer-check'
						}}
					>
						<MenuItem value={'Yes'}>Yes</MenuItem>
						<MenuItem value={'No'}>No</MenuItem>
					</Select>
				</FormControl>

				<Button type="submit" variant="outlined" color="primary" className={classes.button}>
					Add
				</Button>
			</form>
		</div>
	);
};

export default Form;
