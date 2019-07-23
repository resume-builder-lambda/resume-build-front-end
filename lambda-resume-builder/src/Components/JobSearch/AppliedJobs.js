import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3F51B5',
    color: 'white',
    fontSize:'12px'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'white'
    },
  },
}))(TableRow);

function createData(name, Position, Location, Applied, Interview, Offer) {
  return { name, Position, Location, Applied, Interview, Offer};
}

const rows = [
  createData('Google', 'FE Dev', 'SF', 'Yes', 'Yes', 'No'),
  createData('Amazon', 'FS Dev', 'SF', 'No', 'No', 'No'),
  createData('Uber', 'FE Dev', 'SF', 'No', 'No', 'No'),
  createData('Facebook', 'BE Dev','SF', 'Yes', 'No','No'),
  createData('Twitter', 'BE Dev', 'SF', 'Yes', 'No', 'No'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    applied: '',
    interview: '',
    offer: '',
    Yes:'Yes',
    No: 'No'
  });



  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
    <div style={{marginBottom:'25px', fontSize:'13px'}}>
      <form>
      <Input
        style={{margin:'15px' , width:'150px'}}
        placeholder="Company"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
        <Input
        style={{margin:'15px', width:'150px'}}
        placeholder="Position"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />

      <Input
        style={{margin:'15px', width:'150px'}}
        placeholder="Location"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    
       <FormControl className={classes.formControl}>
        <InputLabel htmlFor="applied-check">Applied</InputLabel>
        <Select
          style={{margin:'15px', width:'120px'}}
          value={values.applied}
          onChange={handleChange}
          inputProps={{
            name: 'applied',
            id: 'applied-check',
          }}
        >
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
       
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="interview-check">Interview</InputLabel>
        <Select
        style={{margin:'15px', width:'120px'}}
          value={values.interview}
          onChange={handleChange}
          inputProps={{
            name: 'interview',
            id: 'interview-check',
          }}
        >
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="offer-check">Offer</InputLabel>
        <Select
        style={{margin:'15px', width:'120px'}}
          value={values.offer}
          onChange={handleChange}
          inputProps={{
            name: 'offer',
            id: 'offer-check',
          }}
        >
      <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
     
     </form>
    </div>
    <Button style={{marginBottom:'25px'}} variant="outlined" color="primary" className={classes.button}>
       Add
      </Button>
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Applied</StyledTableCell>
            <StyledTableCell align="right">Interview</StyledTableCell>
            <StyledTableCell align="right">Offer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Position}</StyledTableCell>
              <StyledTableCell align="right">{row.Location}</StyledTableCell>
              <StyledTableCell align="right">{row.Applied}</StyledTableCell>
              <StyledTableCell align="right">{row.Interview}</StyledTableCell>
              <StyledTableCell align="right">{row.Offer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
   
    </div>
  );
 
}