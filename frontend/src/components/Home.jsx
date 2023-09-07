import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import "../App.css";
import {Button} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [clickedIcons, setClickedIcons] = useState([]);
  const [wishlist, setWishlist] = useState([]);

const fetchBooks = async () => {
  try {
    const bookList = await axios.get(
      "http://localhost:8080/books/booklist"
    );
    const booksData = bookList.data.booklist;
     setBooks(booksData);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleIconClick = (index) => {
    setClickedIcons((prevClickedIcons) => {
      const updatedIcons = [...prevClickedIcons];
      updatedIcons[index] = !updatedIcons[index];
      return updatedIcons;
    });
  
    const clickedBook = books[index];
    setWishlist((prevWishlist) => [...prevWishlist, clickedBook]);
  };

  const handleDelete= async(id) => {
    try {
      console.log(id)
     const deletedata= await axios.delete(`http://localhost:8080/books/deletebook/${id}`)
     console.log(deletedata)
      fetchBooks();
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <div>
      <Header />
      <div className="card-container">
      {books !== undefined && books.map((book, i) => (
        <>
        {console.log(book)}
      <Card sx={{ maxWidth: 251 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={book.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {book.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         <b>Author</b>: {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {book.description}
        </Typography>
      </CardContent>
      <CardActions className="last">
      <Typography gutterBottom variant="h5" component="div"> <b>Price</b>: ${book.price}</Typography>
        {clickedIcons[i] ? ( <FavoriteIcon onClick={() => handleIconClick(i)} style={{ color: "red",marginBottom: "5px", fontSize: "35px" }}/>
        ) : (
        <FavoriteBorderIcon onClick={() => handleIconClick(i)} style={{ color: "inherit", marginBottom: "5px", fontSize: "35px", }}/>
        )}
      </CardActions>
      <CardActions className="last">
        <Button>Edit</Button>
        <Button onClick={()=>handleDelete(book._id)}>Delete</Button>
      </CardActions>
    </Card>
    </>
    ))}
    </div>
    </div>
  );
};
