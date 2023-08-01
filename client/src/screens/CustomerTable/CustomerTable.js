import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ModalComponent from "../../components/ModalComponent";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import logo from "../logo.jpg"

function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const handleOpen = () => setOpen(true);
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      let fetch = await axios.get("http://localhost:8080/privy/customers");

      setCustomers(fetch.data);
    };
    fetchCustomers();
  }, []);

  const renderCustomerInRow = customers.map((customer) => {
    let row = {
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
      lastOrder: customer.lastOrder,
      orderPrice: customer.orderPrice,
    };
    return row;
  });

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    {
      field: "email",
      headerName: "Email",
      width: 350,
    },
    {
      field: "phoneNumber",
      headerName: "Phone number",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 300,
    },
    {
      field: "lastOrder",
      headerName: "Last order",
      width: 300,
    },
    {
      field: "orderPrice",
      headerName: "Order price",
      width: 150,
    },
  ];

  const rows = renderCustomerInRow;

  const navigate = useNavigate();

  const changePage = () => {
    navigate("/");
  };

  return (
    <>
     <ModalComponent
        selectedCustomers={selectedCustomers}
        setSelectedCustomers={setSelectedCustomers}
        open={open}
        setOpen={setOpen}
      />
    <Grid container rowSpacing={2} columnSpacing={2} p={2} className="CustomerTablePage" >
      <Grid item>
      <img src={logo} width="100" height="100"></img>
      </Grid>
      <Grid item xs={12} className="CustomerTable">
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
      </Grid>
      <Grid container justifyContent="right" columnSpacing={2} pt={2}>
      <Grid item>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<SendIcon />}
        onClick={handleOpen}
      >
        Create New Campaign
      </Button>
      </Grid>
      <Grid item>
      <Button variant="contained" color="secondary" onClick={changePage}  endIcon={<AddCircleIcon />}>
        Upload More Customers
      </Button>
      </Grid>
      </Grid>
    </Grid>
    </>
  );
}

export default CustomerTable;
