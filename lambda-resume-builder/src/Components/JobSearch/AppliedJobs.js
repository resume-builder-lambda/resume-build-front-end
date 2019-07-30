import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from './Form'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2F2C4B',
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


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));



export default function CustomizedTables(props) {
  const classes = useStyles();

  const [rows, setRows] = useState([])

  function createData(name, Position, Location, Applied, Interview, Offer) {
    console.log('create data function', name, Position, Location, Applied, Interview, Offer)
    return { name, Position, Location, Applied, Interview, Offer};
  }
  
 

  // useEffect(() => {
  
    
  // },[rows]);

  function addRow (values) {
    console.log('values', values)
    setRows([...rows, createData(`${values.company}`, `${values.position}`, `${values.location}`, `${values.applied}`, `${values.interview}`, `${values.offer}`)])
    
  }
 
  return (
    <div>
   <Form addRow={addRow}/>
   
    <div>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="center">Position</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Applied</StyledTableCell>
            <StyledTableCell align="center">Interview</StyledTableCell>
            <StyledTableCell align="center">Offer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Position}</StyledTableCell>
              <StyledTableCell align="center">{row.Location}</StyledTableCell>
              <StyledTableCell align="center">{row.Applied}</StyledTableCell>
              <StyledTableCell align="center">{row.Interview}</StyledTableCell>
              <StyledTableCell align="center">{row.Offer}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
   
    </div>
  );
 
}