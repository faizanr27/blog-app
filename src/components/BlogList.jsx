import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Box, Card, Flex, Text, Inset, Container, Heading, Grid } from '@radix-ui/themes';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Radix UI",
    description: "Learn how to set up and use Radix UI in your React projects.",
    date: "2024-10-01",
    author: "Jane Doe",
    imageUrl: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Explore advanced patterns and techniques in React development.",
    date: "2024-10-05",
    author: "John Smith",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    description: "Best practices for creating inclusive and accessible web apps.",
    date: "2024-10-10",
    author: "Alice Johnson",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    description: "Best practices for creating inclusive and accessible web apps.",
    date: "2024-10-10",
    author: "Alice Johnson",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },  {
    id: 5,
    title: "Building Accessible Web Applications",
    description: "Best practices for creating inclusive and accessible web apps.",
    date: "2024-10-10",
    author: "Alice Johnson",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },  {
    id: 6,
    title: "Building Accessible Web Applications",
    description: "Best practices for creating inclusive and accessible web apps.",
    date: "2024-10-10",
    author: "Alice Johnson",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const BlogList = () => {
  return (
    <Container size="3" mt={'8'} width={{initial:'auto'}}  maxWidth={{initial: '50%', xs:'80%', sm:'60%', xl:'60%'}}>
      <Grid columns={{initial:'1', xs:'2', md:'3'}} gap='5' justify={'center'} align={'center'}>
        {blogPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            <Box maxWidth={{initial:'240px',sm:'340px'}} >
            <Card size={{initial:'1' , lg: '2'}}>
              <Inset clip="padding-box" side="top" pb="0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Box p="4" >
                <Heading as="h2" size={{initial:'2' , lg: '3', xl:'4'}} mb={'1'} >{post.title}</Heading>
                <Text as="p" size={{initial:'1' , lg: '3', xl: '4'}} mb={'1'}>
                  {post.description}
                </Text>

                <Box display={'inline-block'}>
                  <Text as="a" size={{initial:'1' , lg: '2'}} mb={'1'} color="blue" href={`/blog/${post.id}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    Read more <ArrowRightIcon style={{ marginLeft: '4px' }} />
                  </Text>
                  <Text as="p" size={{initial:'1' , lg: '2'}} color="gray">
                  Published on {post.date} by {post.author}
                </Text>
                </Box>
              </Box>
            </Card>
            </Box>
            {/* {index < blogPosts.length - 1 && (
              <Separator.Root className="bg-gray-200 h-px w-full" />
            )} */}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogList;