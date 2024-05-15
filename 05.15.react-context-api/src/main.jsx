import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FavoritesProvider from "./context/favoritesContext.jsx";
import ProductsProvider from "./context/productsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ProductsProvider>
  </React.StrictMode>
);
