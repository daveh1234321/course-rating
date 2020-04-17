import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'




export function CoursesTable (props) {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Course Name',
                accessor: 'name', // accessor is the "key" in the data
            },{
                Header: 'Course Location',
                accessor: 'courseLocation', // accessor is the "key" in the data
            },{
                Header: 'Course Creator',
                accessor: 'creator', // accessor is the "key" in the data
            },{
                Header: 'Course Date',
                accessor: 'date', // accessor is the "key" in the data
            },{
                Header: 'Course Rating',
                accessor: 'rating', // accessor is the "key" in the data
            },{
                Header: 'Course Completed',
                accessor: 'completed', // accessor is the "key" in the data
            }
        ],
        []
      )

    const { courses } = props;
    const data = courses;
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your tableame	InfotHeaderGroupProps()}>
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>          
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}

CoursesTable.prototypes = {
    courses: PropTypes.arrayOf().isRequired
}