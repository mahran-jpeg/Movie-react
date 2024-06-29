import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HomeMovies from "./components/HomeMovies";


function App() {
  return (
    <>
    <div className="app__container">
    <Sidebar/>
    <div className="app__container__right">
    <Header/>
    <HomeMovies/>
    </div>
  
    </div>

    </>
  );
}

export default App;