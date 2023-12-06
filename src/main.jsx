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
import UserProvider from "./Components/Contexts/userProvider.jsx";
// serviceWorker registering
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/X-Beat/">
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
