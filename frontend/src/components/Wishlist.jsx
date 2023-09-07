import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Wishlist = ({ wishlist  }) => {
  console.log(wishlist)
  return (
    <div>
      <Header />
      <div>
        <ul>
          {wishlist && wishlist.length > 0 ? (
            wishlist.map((book, i) => (
              <div key={i}>
                <h3>Name: {book.name}</h3>
                <h4>Author: {book.author}</h4>
          
              </div>
            ))
          ) : (
            <h3>No books in the wishlist.</h3>
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
