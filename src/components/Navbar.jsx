import React from 'react';

import { Flex, Heading, SegmentedControl, Avatar,HoverCard,Text,Strong } from '@radix-ui/themes';

const Navbar = () => {
  return (
    <Flex direction={"row"} mx={{sm: '6',lg:"9"}} justify={'between'}>
        <Heading mt={'2'}>Blog</Heading>
        <SegmentedControl.Root defaultValue="Home" size={'2'} radius={'medium'} mt={'3'}>
            <SegmentedControl.Item value="Home">Home</SegmentedControl.Item>
            <SegmentedControl.Item value="My-Blogs">My Blogs</SegmentedControl.Item>
            <SegmentedControl.Item value="Post Blog">Post Blog</SegmentedControl.Item>
        </SegmentedControl.Root>
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
        
    </Flex>
  );
};

export default Navbar;
