import { Route, Routes } from "react-router-dom";
import "./App.css";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import Homepage from "./Pages/Homepage/Homepage";
import LikePage from "./Pages/LikePage/LikePage";
import SingleVideoPage from "./Pages/SingleVideoPage/SingleVideoPage";
import WatchLater from "./Pages/WatchLater/WatchLater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/like" element={<LikePage/>}/>
        <Route path="/watchLater" element={<WatchLater/>}/>
        <Route path="/singleVideo" element={<SingleVideoPage/>}/>
        <Route path="/history" element={<HistoryPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
