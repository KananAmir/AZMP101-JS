import { createContext, useState } from "react";

export const FavoritesContext = createContext(null);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
