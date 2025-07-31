import React, { useState } from 'react'
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/Add/Add'
import { products } from '../../data';
import { Avatar } from '@mui/material';



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
      field: 'title',
      headerName: 'Title',
      width: 100,
      editable: true,
      type: "String"
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 150,
      editable: true,
      type: "String"
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
      type: "String"
    },
    {
      field: 'producer',
      headerName: 'Producer',
      width: 200,
      type: "String"
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: 150,
      type: "String"
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      width: 150,
      type: "boolean"
    },
    
  ];
const Products = () => {
    const [open, setOpen] = useState(false)
  return (
     <div className='products'>
      <div className="info-head">
        <h1>Products</h1>
        <button onClick={()=> setOpen(true)} className='btn'>Add New Products</button>
      </div>
      <DataTable columns={columns} rows={products} slug="products"/>
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Products