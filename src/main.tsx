import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app";
import "@/App.css";
import { UserProfileProvider } from "@/core/providers/user-profile";
import { UserListProvider } from "@/core/providers/user-list";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProfileProvider>
      <UserListProvider>
        <App />
      </UserListProvider>
    </UserProfileProvider>
  </React.StrictMode>
);
