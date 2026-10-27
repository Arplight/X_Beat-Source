import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// React Router
import { BrowserRouter } from "react-router-dom";

// Providers
import { HelmetProvider } from "react-helmet-async";
import ProductsProvider from "./Components/Contexts/ProductsProvider.jsx";
import CartProvider from "./Components/Contexts/CartProvider.jsx";
import FocusProvider from "./Components/Contexts/FocusProvider.jsx";
import UserProvider from "./Components/Contexts/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <FocusProvider>
                <App />
              </FocusProvider>
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
