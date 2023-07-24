import { createContext, useContext, useState } from "react";

const Details = createContext(null);

export const useDetails = () => {
  const context = useContext(Details);

  if (context === undefined) {
    throw new Error("useDetails must be used within a DetailsProvider");
  }
  return context;
};

const DetailsProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);
    setFavorites(newFavorites);
  };

  const removeFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <Details.Provider value={{ favorites, addFavorites, removeFavorites }}>
      {children}
    </Details.Provider>
  );
};

export default DetailsProvider;

