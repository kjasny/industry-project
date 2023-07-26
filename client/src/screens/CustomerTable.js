import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ModalComponent from '../components/ModalComponent'
import SendIcon from '@mui/icons-material/Send';


function CustomerTable() {
  
  const [customers, setCustomers] = useState([])
  const handleOpen = () => setOpen(true);
  const [selectedCustomers, setSelectedCustomers] = useState([])
  const [open, setOpen] = React.useState(false);

useEffect(() => {
  const fetchCustomers = async() => {
    let fetch = await axios.get('http://localhost:8080/privy/customers')

    setCustomers(fetch.data)
}
fetchCustomers()

},[])


const renderCustomerInRow = customers.map(customer => {
  let row = { id: customer.id, firstName: customer.firstName, lastName: customer.lastName, email: customer.email, phoneNumber: customer.phoneNumber, 
    lastOrder: customer.lastOrder, orderPrice: customer.orderPrice}
  return row
})

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 130,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
  },
  {
    field: 'lastOrder',
    headerName: 'Last order',
    width: 130,
  },
  {
    field: 'orderPrice',
    headerName: 'Order price',
    width: 90,
  }
];

const rows = renderCustomerInRow;

  return (
    <div className='CustomerTablePage'>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="secondary" endIcon={<SendIcon />} onClick={handleOpen}>
        Create New Campaign
      </Button>
      <ModalComponent selectedCustomers={selectedCustomers} setSelectedCustomers={setSelectedCustomers} open={open} setOpen={setOpen} />
    </Stack>
      <div className="CustomerTable">
            <div style={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20]}
            checkboxSelection
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setSelectedCustomers(newRowSelectionModel);
            }}
            rowSelectionModel={selectedCustomers}
         />
        </div>

      </div>
    </div>
  );
}

export default CustomerTable;
