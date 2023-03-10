import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrencyContextProvider } from "./context/CurrencyContext";
import { AuthContextProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CurrencyContextProvider>
          <QueryClientProvider client={client}>
            <App />
          </QueryClientProvider>
      </CurrencyContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
