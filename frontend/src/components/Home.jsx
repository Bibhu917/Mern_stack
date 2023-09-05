import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import axios from 'axios'

export const Home = () => {
  const [books, setBooks] = useState([]); // Initialize as an empty array
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookList = await axios.get("https://simple-books-api.glitch.me/books");
        const booksData = bookList.data;
        setBooks(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      <Header />
      <div>
          {books !== undefined && books.map((book, i) => (
            <div key={i}>
              <h2>{book.name}</h2>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  )
}
