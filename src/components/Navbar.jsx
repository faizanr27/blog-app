import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Heading, SegmentedControl, Avatar,HoverCard,Text,Strong, Button } from '@radix-ui/themes';

const Navbar = () => {
  const [auth] =useState(false)
  const location = useLocation();


  const getSegmentedControlValue = () => {
    if (location.pathname === '/') return 'Home';
    if (location.pathname === '/my-blogs') return 'My-Blogs';
    if (location.pathname === '/post-blog') return 'Post-Blog';
    return 'Home';
  };
  return (
    <Flex direction={"row"} mx={{initial: '4', sm: '6',lg:"9"}} justify={'between'}>
        <Heading mt={{initial:'4'}} size={'6'}>Blog</Heading>
        <div className="hidden sm:block">
        <SegmentedControl.Root value={getSegmentedControlValue()} size={'2'} radius={'medium'} mt={{initial:'4'}}>
      <SegmentedControl.Item value="Home" asChild>
        <Link to="/" >Home</Link>
      </SegmentedControl.Item>

      <SegmentedControl.Item value="My-Blogs" asChild>
        <Link to="/my-blogs" >My Blogs</Link>
      </SegmentedControl.Item>

      <SegmentedControl.Item value="Post-Blog" asChild>
        <Link to="/post-blog">Post Blog</Link>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
        </div>
        {auth ? (
                  <HoverCard.Root>
                  <HoverCard.Trigger>
                  <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
                  radius={'full'}
                  mt={{initial:'3',xs:'2'}}
                  size={{initial:'1', xs:'2'}}
                  />
                  </HoverCard.Trigger>
                  <HoverCard.Content size="1" maxWidth="240px">
                <Text as="div" size="1" trim="both">
                  <Strong>Name</Strong>
                          <br/>
                          faizanms025347@gmail.com
                </Text>
              </HoverCard.Content>
                  </HoverCard.Root>
        ) : (
          <Button variant='surface' color='' mt={{initial:'4'}}>Login/Signup</Button>
        ) }



    </Flex>
  );
};

export default Navbar;
