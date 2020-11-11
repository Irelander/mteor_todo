import React from 'react';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const Board = ({ board }) => {
    return <Table>
        <TableBody>
            <TableHead>
                <TableRow>
                    <TableCell>{board.no}</TableCell>
                    <TableCell>{board.title}</TableCell>
                    <TableCell>{board.category}</TableCell>
                    <TableCell>{board.dictionary}</TableCell>
                    <TableCell>{board.language}</TableCell>
                    <TableCell>{board.word}</TableCell>
                </TableRow>
            </TableHead>
        </TableBody>
    </Table>
};







{/* <TableRow>
<TableCell>{board.no}</TableCell>
<TableCell>{board.category}</TableCell>
<TableCell>{board.dictionary}</TableCell>
<TableCell>{board.language}</TableCell>
<TableCell>{board.word}</TableCell>
</TableRow> */}

