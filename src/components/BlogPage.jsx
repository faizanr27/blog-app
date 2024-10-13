import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Container, Flex, Heading, Text, } from '@radix-ui/themes';
import { CalendarIcon } from '@radix-ui/react-icons';
import { blogPosts } from './BlogList';


const BlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((blog) => blog.id === Number(id));

  if (!post) {
    return <Text>Blog post not found</Text>;
  }

  return (
    <Container size="3" mx={{initial:'4',xl:'0'}}>
      <Box py="6">
        {/* Display the blog image */}
        <img src={post.imageUrl} alt={post.title} className='w-full h-1/2 overflow-hidden'/>

        <Heading size="8" mb="4">{post.title}</Heading>


        {/* Post description and content */}
        <Box className="prose max-w-none">
          <Text size="3" mb="4">{post.description}</Text>
        </Box>
        <Flex align="center" gap="3" justify={'between'} mt="6" >
          {/* Fallback to initials if no avatar image */}
          <Avatar
            size="4"
            src={post.authorAvatar}  // Assuming you might add authorAvatar later; if not, you can remove this line
            fallback={post.author.split(' ').map(n => n[0]).join('')}  // Generate initials
            radius="full"
          />
          <Box>
            <Text size="3" weight="bold">{post.author}</Text>
            <Flex align="center" gap="1">
              <CalendarIcon />
              <Text size="2" color="gray">{post.date}</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default BlogPage;