import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HomeMovies from "./components/HomeMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPages from "./pages/MoviesPages";
import ProfilePage from "./pages/ProfilePage";
import { Link } from "react-router-dom";
import PlansPage from "./pages/PlansPage";
function App() {
  return (
    <>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPages />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/plans" element={<PlansPage/>}/>
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
