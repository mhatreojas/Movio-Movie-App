import MovieCard from "./components/MovieCard"
import "./css/App.css"
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
 

  return (
    <MovieProvider>
    <div>
    <NavBar/>
    <main className="main-content">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourites/>}/>
     </Routes>
    </main>

    </div>
    </MovieProvider> 
  );
}

export default App;
