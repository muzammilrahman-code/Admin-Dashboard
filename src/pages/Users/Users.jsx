import React, { useState } from 'react'
import DataTable from '../../components/DataTable/DataTable'
import { allRows } from '../../data';
import { Avatar, Button } from '@mui/material';
import './Users.css'
import Add from '../../components/Add/Add';

const Users = () => {

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <Avatar 
            src={params.row.img || "/noavatar.png"} 
            alt={params.row.firstName}
            sx={{ width: 35, height: 35 }}
          />
        );
      },
    },

   
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      type: "String"
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      type: "String"
    },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 110,
    //   editable: true,
    // },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      type: "String"
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      type: "String"
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: 150,
      type: "String"
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 150,
      type: "boolean"
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];

  
  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=> setOpen(true)} className='btn'>Add New User</button>
      </div>
      <DataTable columns={columns} rows={allRows} slug="users"/>
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users