//import logo from './logo.svg';
//import './App.css';
import Home from './components/home/Home';
//import Header from './components/header/Header';
//import Tours from './components/tours/Tours';
//const data = require('../src/components/data/db.json');
import TourDetails from "./components/TourDetails/TourDetails.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Home />}> </Route>
        <Route path="/city/:id" element={<TourDetails />}> </Route>

      </Routes>
    </>
  );
}

export default App;
