import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./Context/CategoryContext";
import { FilterProvider } from "./Context/FilterContext";
import { VideoProvider } from "./Context/VideoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <FilterProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </FilterProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
