import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/styles'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import AppliedIcon from '@material-ui/icons/DeleteForeverOutlined'
import HomeIcon from '@material-ui/icons/CreateOutlined'

import { getJobs, addJob, updateJob } from '../../Actions'

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

function CustomizedTables(props) {

  const [show, setShow] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [rows, setRows] = useState(props.jobs)
  const [newRow, setNewRow] = useState(null)
  const [editRow, setEditRow] = useState({ bool: false, row: {} })

  useEffect(() => {

    props.jobs.length !== 0 && setUpdated(true)

  }, [props.jobs])

  useEffect(() => {

    if (!updated || newRow || editRow.bool) {

      if (newRow) {

        if (editRow.bool) {

          props.updateJob(newRow)
          setNewRow(null)
          setEditRow({ bool: false, row: {} })
          setUpdated(false)

        } else {

          props.addJob(newRow)
          setNewRow(null)
          setUpdated(false)

        }

      } else props.getJobs()

    } else setRows(props.jobs)

  }, [updated, newRow])

  const classes = useStyles()

  return (

    <div>

      <Modal
        show={show}
        setShow={setShow}
        createData={setNewRow}
        editRow={editRow}
        setEditRow={setEditRow}
      />

      <p style={{ marginBottom: '30px' }}>A job search log is a great way to set goals and keep motivated to achieve them. You can look back and see how many jobs and for what positions you have applied for. This can also help you to see where you were successful and where you may need some improvements with your job search tools.</p>

      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  Company
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Position
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Location
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Applied
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Interview
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Offer
                  </StyledTableCell>

                <StyledTableCell align="center">
                  Edit/Del
                  </StyledTableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {rows &&
                rows.map((row, index) => (
                  <StyledTableRow key={index * Math.random()}>
                    <StyledTableCell component="th" scope="row">
                      {row.company}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.position}</StyledTableCell>
                    <StyledTableCell align="center">{row.location}</StyledTableCell>
                    <StyledTableCell align="center">{row.applied === true ? 'Yes' : 'No'}</StyledTableCell>
                    <StyledTableCell align="center">{row.interview === true ? 'Yes' : 'No'}</StyledTableCell>
                    <StyledTableCell align="center">{row.offer === true ? 'Yes' : 'No'}</StyledTableCell>
                    <StyledTableCell align="center">
                      <AppliedIcon />
                      <span style={{ fontSize: '35px' }}>|</span>
                      <HomeIcon cursor='pointer' onClick={() => {
                        setShow(true)
                        setEditRow({ bool: true, row })
                      }} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => setShow(!show)}
        style={{
          marginTop: '40px',
          float: 'right'
        }}>
        <AddIcon />
      </Fab>

    </div>

  )

}

const mapStateToProps = state => ({
  jobs: state.jobs
})

export default connect(
  mapStateToProps, {
    getJobs,
    addJob,
    updateJob
  })(CustomizedTables)
