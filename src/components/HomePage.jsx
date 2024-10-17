import React, {useState} from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Route, Routes } from "react-router-dom";

import BlogList from './BlogList';

import BlogPage from './BlogPage';
import NewPostDialog from './NewPostDialog';

const HomePage = () => {

  return (
    <div>
        {/* {showUsersBlog?  : } */}
        <Routes>
          <Route path="/" element={<BlogList/>}/>

        </Routes>
        {/* <BlogPage/> */}
        {/* <NewPostDialog/> */}
    </div>
)};

export default HomePage;