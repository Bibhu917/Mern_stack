import React, { useState } from 'react'
import { Header } from './Header'
import "../App.css";
import {TextField,Button,Paper,Box,Typography} from "@mui/material";
import axios from 'axios';

export const AddBook = () => {
  const [newBook,setNewBook] = useState({
    name:"",
    author:"",
    description:"",
    price:"",
    available:"",
    image:""
  })
  const handleChange = (e) => {
    setNewBook({...newBook,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const data ={
      name: newBook.name,
      author: newBook.author,
      description: newBook.description,
      price: newBook.price,
      available: newBook.available,
      image: newBook.image
    }
    try {
      const response = await axios.post('http://localhost:8080/books/addBook',data)
      console.log(response)
      alert("data added successfully")

    } catch (error) {
      console.log("error", error)
    }
  }
  return (
    <div>
      <Header/>
   <div className='conteiner'>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h5" align="center" margin="dense">
            Book Add Form 
          </Typography>
          <form onSubmit={handleSubmit}>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <TextField required id="name" name="name" label="Book Name" fullWidth margin="dense" onChange={handleChange} sx={{ width:"60ch" }}/>
              <TextField required id="author" name="author" label="Author" type='text' fullWidth margin="dense" onChange={handleChange} sx={{ width:"60ch" }}/>
              <TextField required id="description" name="description" label="Description" type='text' fullWidth margin="dense" onChange={handleChange} sx={{ width:"60ch" }} />
              <TextField required id="price" name="price" label="Price" type="number" fullWidth margin="dense" onChange={handleChange} sx={{ width:"60ch" }}/>
              <TextField required id="available" name="available" label="Available" type="text" fullWidth  margin="dense" onChange={handleChange} sx={{ width:"60ch" }}/>
              <TextField required id="image" name="image" label="Image URL" type="url" fullWidth margin="dense" onChange={handleChange} sx={{  width:"60ch" }} />
          </Box>
          <Box mt={3}>
            <Button variant="contained" color="primary" type='submit'> ADD BOOK</Button>
          </Box>
          </form>
        </Box>
      </Paper>
    </div>

      {/* <Footer/> */}
    </div>
  )
}
