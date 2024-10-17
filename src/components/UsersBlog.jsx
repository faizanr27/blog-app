import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Box, Card, Flex, Text, Inset, Container, Heading, Grid } from '@radix-ui/themes';
import { Link,useLocation } from 'react-router-dom';

export const blogPosts = [
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
  }
];

const UsersBlog = () => {

  return (
    <Container size="3" mt={{initial:'8', sm:'8'}} width={{initial:'auto'}}  maxWidth={{initial: '70%', xs:'80%', sm:'60%', xl:'60%'}}>
      <Grid columns={{initial:'1', xs:'2', md:'3'}} gap='5' justify={'center'} align={'center'}>
        {blogPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            <Box maxWidth={{initial:'280px',sm:'350px'}}>
            <Card size={{initial:'3' , lg: '3'}} height='400px'>
              <Inset clip="padding-box" side="top" pb="0">
                <Link to={`/post/${post.id}`}>
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
                </Link>
              </Inset>
              <Box py="4" >
                <Heading as="h2" size={{initial:'2' , lg: '3', xl:'4'}} mb={'1'} >

                {post.title}

                </Heading>
                <Text as="p" size={{initial:'1' , lg: '3', xl: '4'}} mb={'1'}>
                  {post.description}
                </Text>

                <Box display={'inline-block'}>
                  <Link to={`/post/${post.id}`}>
                  <Text as="a" size={{initial:'1' , lg: '2'}} mb={'1'} color="blue" href={`/blog/${post.id}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    Read more <ArrowRightIcon style={{ marginLeft: '4px' }} />
                  </Text>
                  </Link>
                  <Text as="p" size={{initial:'1' , lg: '2'}} color="gray">
                  Published on {post.date} by {post.author}
                </Text>
                </Box>
              </Box>
            </Card>
            </Box>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersBlog;