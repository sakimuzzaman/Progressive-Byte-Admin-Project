import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  
    { field: 'Date', headerName: 'Date', width: 130 },
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'Amount', headerName: 'Amount', width: 130 },
    
];

const rows  = [
    { id: 1, Name: 'Vance Rollins', Date: '05-01-2024', Amount: '$1400.00' },
    { id: 2, Name: 'Lee Bauer', Date: '09-05-2024', Amount: '$1200.00' },
    { id: 3, Name: 'Lee Bauer', Date: '08-07-2024', Amount: '$1100.00' },
    { id: 4, Name: 'Xantha Leon', Date: '04-09-2024', Amount: '$1800.00' },
    { id: 5, Name: 'Jhon Leon', Date: '05-10-2024', Amount: '$1900.00' },
    { id: 6, Name: 'Melisandre', Date: '08-07-2024', Amount: '$2400.00' },
    { id: 7, Name: 'Clifford', Date: '09-05-2024', Amount: '$2200.00' },
    { id: 8, Name: 'Frances', Date: '05-01-2024', Amount: '$2800.00' },
    { id: 9, Name: 'Roxie', Date: '08-07-2024', Amount: '$3400.00' },
];

const paginationModel = { page: 0, pageSize: 5 };




const LatestIncomeTable = () => {


    return (

        <div className='w-[700px]'>

            <div className='text-gray-700 font-bold m-4'>
                <h6>Latest Income</h6>
            </div>

            <Paper sx={{ height: 400, width: '100%' }}>
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

export default LatestIncomeTable;