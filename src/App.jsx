import React,{useState} from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from "react-router-dom";
import BlogPage from './components/BlogPage';
import Navbar from './components/Navbar';
import UsersBlog from './components/UsersBlog'
import NewPostDialog from './components/NewPostDialog'

const App = () => {

  return (
      <div className='w-full h-full bg-radix-gradient'>
      <Navbar className='bg-transparent' />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/my-blogs" element={<UsersBlog />}/>
        {/* <Route path="/post-blog" element={<NewPostDialog/>}/> */}
        <Route path="/post/:id" element={<BlogPage/>}/>
      </Routes>
      </div>

  );
};

export default App;
