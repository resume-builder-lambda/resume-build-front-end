import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/styles'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import AppliedIcon from '@material-ui/icons/DeleteForeverOutlined'
import HomeIcon from '@material-ui/icons/CreateOutlined'

import Modal from './Modal'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#2F2C4B',
    color: 'white',
    fontSize: '12px'
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'white'
    }
  }
}))(TableRow)

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  fab: {
    background: '#BB1433'
  },
}))

export default function CustomizedTables(props) {
  const classes = useStyles()

  const [show, setShow] = useState(false)

  const [rows, setRows] = useState([])

  function createData(fields) {
    const { name, position, location, applied, interview, offer } = fields
    return {
      company: name,
      position,
      location,
      applied,
      interview,
      offer
    }
  }

  function addRow(values) {
    setRows([...rows, createData(values)])
  }

  return (
    <div>

      <Modal show={() => setShow(!show)} handleClose={() => setShow(!show)} addRow={addRow} />
      <p style={{ marginBottom: '30px' }}>A job search log is a great way to set goals and keep motivated to achieve them. You can look back and see how many jobs and for what positions you have applied for. This can also help you to see where you were successful and where you may need some improvements with your job search tools.</p>
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
                <StyledTableCell align="center">Edit/Del</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.Position}</StyledTableCell>
                    <StyledTableCell align="center">{row.Location}</StyledTableCell>
                    <StyledTableCell align="center">{row.Applied}</StyledTableCell>
                    <StyledTableCell align="center">{row.Interview}</StyledTableCell>
                    <StyledTableCell align="center">{row.Offer}</StyledTableCell>
                    <StyledTableCell align="center">
                      <AppliedIcon />
                      <span style={{ fontSize: '35px' }}>|</span>
                      <HomeIcon />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => setShow(!show)} style={{ marginTop: '40px', float: 'right' }}>
        <AddIcon />
      </Fab>

    </div>
  )
}
