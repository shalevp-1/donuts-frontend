//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { navBarArr } from './Components/NavBar/NavItemsData';
import DonutsGallery from './Components/DonutsGallery/DonutsGallery';
//import TempComponent from './Components/AboutUs/AboutUs';
import SignUp from './Components/SignUp/SignUp';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import DonutsV from "./Components/Donuts/DonutsV";
import DonutsAdd from "./Components/Donuts/DonutsAdd";
import DonutsUpdate from "./Components/Donuts/DonutsUpdate";
import Login from './Components/SignUp/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar items={navBarArr} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/donutsv' element={<DonutsV />} />
          <Route path='/donutsadd' element={<DonutsAdd />} />
          <Route path='/donutsupdate/:id' element={<DonutsUpdate />} />
          <Route path='/donuts' element={<DonutsGallery />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
