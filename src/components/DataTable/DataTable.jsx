import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { TextField, Box, Avatar, Button } from '@mui/material';
import React, { useState, useMemo } from 'react'
import view from '../../assets/view.svg'
import deleteImg from '../../assets/delete.svg'
import './DataTable.css'
import { Link } from 'react-router-dom';

const DataTable = (props) => {
  const [searchText, setSearchText] = useState('');

  const handleDelete = (id) => {
    // delete the item
    console.log(`${id} has been deleted`);
  }

  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: (params) => {
      return (
        <div className='action'>
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src={view} alt="view" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src={deleteImg} alt="delete" />
          </div>
        </div>
      );
    },
  }

  // Filter rows based on search text
  const filteredRows = useMemo(() => {
    if (!searchText) return props.rows;
    
    return props.rows.filter((row) =>
      Object.values(row).some((value) =>
        value != null && value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, props.rows]);

  return (
    <div className='mainData'>
      <Box sx={{ p: 2 }}>
        <TextField
          className='inputBox'
          label="Search..."
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ 
            mb: 2, 
            width: { xs: '100%', sm: 300 }, 
            maxWidth: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px', 
            },
          }}
        />
      </Box>
      <div className="table-container">
        <DataGrid
          className='dataTable'
          rows={filteredRows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            '& .MuiDataGrid-main': {
              minWidth: 0,
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #dee2e6',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #dee2e6',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f8f9fa',
            },
          }}
        />
      </div>
    </div>
  )
}

export default DataTable