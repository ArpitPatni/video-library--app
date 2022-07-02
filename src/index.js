import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./Context/CategoryContext";
import { FilterProvider } from "./Context/FilterContext";
import { VideoProvider } from "./Context/VideoContext";
import { AuthProvider } from "./Context/AuthContext";
import { PlaylistProvider } from "./Context/PlaylistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlaylistProvider>
          <VideoProvider>
            <FilterProvider>
              <CategoryProvider>
                <App />
              </CategoryProvider>
            </FilterProvider>
          </VideoProvider>
        </PlaylistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
