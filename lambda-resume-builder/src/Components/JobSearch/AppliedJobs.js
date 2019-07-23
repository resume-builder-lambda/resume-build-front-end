import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

  return (
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
  );
}