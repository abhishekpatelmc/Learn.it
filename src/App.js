import "./App.css";
import RecorderPage from "./pages/RecorderPage";
<<<<<<< HEAD
import Landing from "./Components/Landing/Landing"

function App() {
  return (
    <div className="App">
      <Landing />
      <RecorderPage />
      
=======
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
>>>>>>> 1bd4aef93621b2f6d0ad8835ca46ef127af283d3
    </div>
  );
}

export default App;
