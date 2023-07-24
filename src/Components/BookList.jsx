import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDetails } from './Details/Details';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../API';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addFavorites, removeFavorites } = useDetails();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  const handleFavoriteClick = (book) => {
    if (favoritesChecker(book.id)) {
      removeFavorites(book.id);
    } else {
      addFavorites(book);
    }
  };

  return (
    <div className="list-books">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>
            <img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} />
          </div>
          <div>
            {favoritesChecker(book.id) ? (
              <button onClick={() => handleFavoriteClick(book)}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={() => handleFavoriteClick(book)}>
                Add to Favorites
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
