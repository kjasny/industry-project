import React, { useState } from "react"
import axios from "axios"
import logo from "../logo.jpg"
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

const AddCustomer = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value })
      console.log(inputs)
    }

    const submit = () => {
        axios
        .post("http://localhost:8080/privy/customer", inputs, {})
        .then((res) => {
            navigate("/customers")});
          }

    const returnList = () => {
        navigate("/customers")
    }
    

return(
<form>
    <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column" pt={2}>
        <Grid item xs={12} justifyContent="flex-start" alignItems="flex-start">
            <img src={logo} width="150" height="150" alt="logo"></img>
        </Grid>  
        <Grid item xs={2}>  
      <label>First Name:
      <input 
        type="text" 
        name="firstName" 
        value={inputs.firstName} 
        onChange={handleChange}
      />
      </label>
      </Grid>
      <Grid item xs={2}>
      <label>Last Name:
      <input 
        type="text" 
        name="lastName" 
        value={inputs.lastName} 
        onChange={handleChange}
      />
      </label>
      </Grid>
      <Grid item xs={2}>
      <label>Email:
      <input 
        type="text" 
        name="email" 
        value={inputs.email} 
        onChange={handleChange}
      />
      </label>
      </Grid>
      <Grid item xs={2}>
      <label>Phone Number (+1XXXXXXXXXX):
        <input 
          type="text" 
          name="phoneNumber" 
          value={inputs.phoneNumber} 
          onChange={handleChange}
        />
        </label>
        </Grid>
        <Grid item xs={2}>
        <label> Last Order:
      <input 
        type="text" 
        name="lastOrder" 
        value={inputs.lastOrder} 
        onChange={handleChange}
      />
      </label>
      </Grid>
      <Grid item xs={2}>
      <label>Order Price:
      <input 
        type="text" 
        name="orderPrice" 
        value={inputs.orderPrice} 
        onChange={handleChange}
      />
      </label>
      </Grid>
      <Grid item xs={2}>
      <Button variant="contained" color="secondary" onClick={submit}  endIcon={<AddCircleIcon />}>
        Submit New Customer
      </Button>
      </Grid>
      <Grid item xs={2}>
      <Button variant="contained" color="secondary" onClick={returnList}  endIcon={<AddCircleIcon />}>
        Return to Customer List
      </Button>
      </Grid>
    </Grid>
</form>
)

}

export default AddCustomer
