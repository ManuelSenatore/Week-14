import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './components/HomePage';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <MyNavBar />
    <HomePage />
    <MyFooter />
    </BrowserRouter>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=%7BAPI2767e7954044d4bd64079128f9b1a2e8
