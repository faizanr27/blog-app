import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box, Container, Flex, Heading, Text } from '@radix-ui/themes';
import { CalendarIcon, PersonIcon } from '@radix-ui/react-icons';

const blogPosts = {
  1: {
    title: "Getting Started with Radix UI",
    content: "Radix UI is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components as the base layer of your design system...",
    date: "2024-10-01",
    author: "Jane Doe",
    authorAvatar: "https://i.pravatar.cc/150?u=janedoe"
  },
  // Add more blog posts here
};

const BlogPage = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <Text>Blog post not found</Text>;
  }

  return (
    <Container size="3">
      <Box py="6">
        <Heading size="8" mb="4">{post.title}</Heading>
        <Flex align="center" gap="3" mb="6">
          <Avatar
            size="4"
            src={post.authorAvatar}
            fallback={post.author.split(' ').map(n => n[0]).join('')}
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
        <Box className="prose max-w-none">
          <Text size="3">{post.content}</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;