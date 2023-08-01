import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Input } from "@mui/material";
import logo from "../logo.jpg"


const UploadPage = () => {
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:8080/privy/upload", formData, {})
      .then((res) => {
        console.log(res);
        navigate("/customers");
      });
  };
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const changePage = () => {
    navigate("/customers");
  };

  return (
    <form>
      <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column" pt={2}>
        <Grid item xs={12}>
          <img src={logo}></img>
        </Grid>
        <Grid item xs={12}>
            <Box>
          <Input type="file" onChange={onFileChange} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Button
            className="btn btn-primary"
            type="submit"
            variant="contained"
            color="secondary"
            onClick={onSubmit}
          >
            Upload
          </Button>
        </Grid>
        <Grid item xs={2} justifyContent="center" alignItems="center">
          <Button variant="contained" color="secondary" onClick={changePage}>
            Customer List
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UploadPage;
