import React from 'react';
import PropTypes from 'prop-types';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useTable } from 'react-table'

function CoursesTable (props) {

    const columns = React.useMemo(
        () => [
            {
                Header: 'Title',
                accessor: 'name', // accessor is the "key" in the data
            },{
                Header: 'Location',
                accessor: 'courseLocation', // accessor is the "key" in the data
            },{
                Header: 'Creator',
                accessor: 'creator', // accessor is the "key" in the data
            },{
                Header: 'Start Date',
                accessor: 'startDate', // accessor is the "key" in the data
            },{
              Header: 'Completion Date',
              accessor: 'endDate', // accessor is the "key" in the data
          },{
                Header: 'Rating',
                accessor: 'rating', // accessor is the "key" in the data
            },{
                Header: 'Completed',
                accessor: 'completed', // accessor is the "key" in the data
            }
        ],
        []
      )

    const { data } = props;
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  // Render the UI for your tablename	InfotHeaderGroupProps()}>
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>          
            {headerGroup.headers.map(column => (
              <TableCell className='tableCellHeader' {...column.getHeaderProps()}>
                {column.render('Header').toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()} onClick={() => props.getCourseById(row.original.id)}>
              {row.cells.map(cell => {
                return (
                  <TableCell className='tableCell' {...cell.getCellProps()}>
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

export default CoursesTable;

CoursesTable.prototypes = {
    data: PropTypes.arrayOf().isRequired,
    getCourseById: PropTypes.func.isRequired
}