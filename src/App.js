import "./App.css";
import RecorderPage from "./pages/RecorderPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/home" exact element={<RecorderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
