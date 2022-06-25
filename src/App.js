import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import LikePage from "./Pages/LikePage/LikePage";
import WatchLater from "./Pages/WatchLater/WatchLater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/like" element={<LikePage/>}/>
        <Route path="/watchLater" element={<WatchLater/>}/>
      </Routes>
    </div>
  );
}

export default App;
