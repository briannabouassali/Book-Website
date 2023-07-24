import React from 'react';
import "../App";
import { useDetails } from './Details/Details';

const Favorites = () => {
  const { favorites, addFavorites, removeFavorites } = useDetails();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  return (
    <div className='favorites'>
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className='book'>
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img src={book.image_url} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>There are no favorites yet</h1>
      )}
    </div>
  );
};

export default Favorites;
