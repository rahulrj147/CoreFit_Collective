import React from 'react';
import './tailwind.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import CustomCursor from "./components/CustomCursor"; 

const App = () => (
  <div className="w-full h-screen m-0 ">
    <CustomCursor/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </div>
);

export default App;