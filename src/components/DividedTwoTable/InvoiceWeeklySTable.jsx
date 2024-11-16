import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns = [
   
    { field: 'firstName', headerName: 'Total', width: 130 },
    { field: 'lastName', headerName: 'Invoice generated', width: 150 },
    { field: 'Amount', headerName: '$14000.00', width: 130 }
    
    
];


const rows = [
    { id: 1, lastName: 'Paid', firstName: 'Total', Amount: '$1200' },
    { id: 2, lastName: 'Due', firstName: 'Total', Amount: '$1100' },
   
];

const paginationModel = { page: 0, pageSize: 5 };

const InvoiceWeeklySTable = () => {
    return (
        <div>
            <Paper sx={{ height: 200, width: 500, borderRadius: 3, overflow: 'hidden' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    );
};

export default InvoiceWeeklySTable;