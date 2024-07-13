import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPages from "./pages/MoviesPages";
import ProfilePage from "./pages/ProfilePage";
import { Link } from "react-router-dom";
import PlansPage from "./pages/PlansPage";
import MovieInfoPage from "./pages/MovieInfoPage";
import InfoHomePage from "./pages/InfoHomePage";


function App() {
  
  return (
   
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPages />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/plans" element={<PlansPage/>}/>
            <Route path='/movie/:imdbId' element ={<MovieInfoPage/>}/>
            <Route path='/movie/home/:imdbId' element ={<InfoHomePage/>}/>
          </Routes>
        </Router>
  
  );
}

export default App;
