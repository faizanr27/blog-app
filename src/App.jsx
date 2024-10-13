import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from './components/BlogPage';
import Navbar from './components/Navbar';

const App = () => {

  return (
    
    
    
    <Router>
      <div className='w-full h-full bg-radix-gradient'>
      <Navbar className='bg-transparent'/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/post/:id" element={<BlogPage/>}/>
      </Routes>
      </div>
    </Router>
    

  );
};

export default App;
