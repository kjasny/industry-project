import React, { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const UploadPage = () => {
const [file, setFile] = useState('')

const navigate = useNavigate()

const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    axios.post("http://localhost:8080/privy/upload", formData, {
    }).then(res => {
        console.log(res)
        navigate("/customers")
    })
}
const onFileChange = (event) => {
    setFile(event.target.files[0])
}

const changePage = () => {
    navigate("/customers")
  }

return(
    <div className="container">
<div className="row">
    <form>
        <h3>Upload Customer List</h3>
        <div className="form-group">
            <input type="file" onChange={onFileChange}/>
        </div>
        <div className="form-group">
            <Button className="btn btn-primary" type="submit"  variant="contained" color="secondary" onClick={onSubmit}>Upload</Button>
        </div>
    </form>
</div>
<div>
    <Button variant="contained" color="secondary" onClick={changePage}>Return to Customer List</Button>
</div>
</div>
)

}

export default UploadPage