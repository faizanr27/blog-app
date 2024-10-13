import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import BlogList from './BlogList';
import BlogPage from './BlogPage';
import NewPostDialog from './NewPostDialog';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-radix-gradient">
        
        <BlogList/>
        {/* <BlogPage/> */}
        {/* <NewPostDialog/> */}
    </div>
)};

export default HomePage;