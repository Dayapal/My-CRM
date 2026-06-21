import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider }
from "@/features/auth/auth.context";
import App from "./App";

import "./index.css"; // <-- THIS IS MISSING

import {
  QueryClientProvider,
} from "@tanstack/react-query";

import { queryClient } from "./lib/react-query";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider
      client={queryClient}
    >
     <AuthProvider>
    <App />
  </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);