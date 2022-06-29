import { Route, Routes } from "react-router-dom";
import "./App.css";
import HistoryPage from "./Pages/HistoryPage/HistoryPage";
import Homepage from "./Pages/Homepage/Homepage";
import LikePage from "./Pages/LikePage/LikePage";
import SingleVideoPage from "./Pages/SingleVideoPage/SingleVideoPage";
import WatchLater from "./Pages/WatchLater/WatchLater";
import Loginpage from "./Pages/LoginPage/Loginpage"
import SignupPage from "./Pages/SignupPage/SignupPage"
import { RequiresAuth } from "./RequiresAuth";
import PageNotFound from "./Pages/404-page/PageNotFound"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/like" element={<RequiresAuth><LikePage /></RequiresAuth>} />
        <Route path="/watchLater" element={<RequiresAuth><WatchLater /></RequiresAuth>} />
        <Route path="/singleVideo" element={<SingleVideoPage />} />
        <Route path="/history" element={<RequiresAuth><HistoryPage /></RequiresAuth>} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
