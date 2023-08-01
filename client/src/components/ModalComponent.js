import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { Grid } from "@mui/material";

const ModalComponent = (props) => {
  const { selectedCustomers, setSelectedCustomers, open, setOpen } = props
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState('')


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const sendCampaign = async () => {
    
    await axios.post('http://localhost:8080/privy/newcampaign', 
    {message, customerList: selectedCustomers}
    )
    setMessage('')
    setSelectedCustomers([])
    handleClose()

  }



    return(
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Box sx={style}>
          <Grid item xs={12}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Create Your New Campaign Here:
          </Typography>
          </Grid>
          <Grid item xs={12}>
          <textarea cols="45" rows="10" type='text' value={message} onChange={(event) => {setMessage(event.target.value)}}></textarea>
          </Grid>
          <Grid item xs={6} alignItems="center" justifyContent="center">
          <Button variant="contained" color="secondary" endIcon={<SendIcon />} onClick={sendCampaign}>
            Send Campaign
          </Button>
          </Grid>
        </Box>
        </Grid>
      </Modal>
    )

}

export default ModalComponent