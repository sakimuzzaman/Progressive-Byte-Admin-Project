

import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';


// Define six columns as requested
const columns = [
    { id: 'name', label: 'Invoice number', minWidth: 120 },
    { id: 'code', label: 'Customer', minWidth: 100 },
    { id: 'population', label: 'Issue date', minWidth: 150, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'size', label: 'Due date', minWidth: 100, align: 'right', format: (value) => value.toLocaleString('en-US') },
    { id: 'density', label: 'Amount', minWidth: 100, align: 'right', format: (value) => value.toFixed(2) },
    { id: 'continent', label: 'Status', minWidth: 120 }
];

// Corrected createData function with six columns
function createData(name, code, population, size, density, continent) {
    return { name, code, population, size, density, continent };
}

// Sample data with six columns
const rows = [
    createData('#INV00012', 'Vance Rollins', '04-01-2024', '04-01-2024', '$1012.00', 'Paid'),
    createData('#INV00013', 'Lee Bauer', '04-01-2024', '04-01-2024', '$1012.00', 'Partially Paid'),
    createData('#INV00014', 'Xantha Leon', '04-01-2024', '04-01-2024', '$1012.00', 'Paid'),
    createData('#INV00020', 'Kim J Gibsin', '04-01-2024', '04-01-2024', '$1012.00', 'Partially Paid'),
    createData('#INV00024', 'Anthony B Reefrone', '04-01-2024', '04-01-2024', '$1012.00', 'Paid'),
    createData('#INV00012', 'Xantha leon', '04-01-2024', '04-01-2024', '$1012.00', 'Partially Paid'),
    createData('#INV00012', 'Kim J Gibsin', '04-01-2024', '04-01-2024', '$1012.00', 'Paid'),
    createData('#INV00012', 'Lee Bauer', '04-01-2024', '04-01-2024', '$1012.00', 'Paid')
];

const RecentInvoicesTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>

            <Typography variant="h6" gutterBottom component="div" sx={{ padding: 2, backgroundColor: 'white', borderRadius: 3 }}>
                Recent Invoices
            </Typography>

            <Paper sx={{ width: '100%', borderRadius: 3, overflow: 'hidden' }}>

                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">

                        <TableHead >

                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ top: 57, minWidth: column.minWidth }}
                                    >

                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default RecentInvoicesTable;
