import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path="/tvshows" element={<TvShows />}/>
        <Route path="/" element={<MyMain />}/>
        <Route path="/details:filmId" element={<MovieDetails />}/>
      </Routes>
      <MyFooter></MyFooter>
    </BrowserRouter>
  );
}

export default App;
