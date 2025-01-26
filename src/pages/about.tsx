import React from 'react'
import { Container, Typography, Box } from '@mui/material'

const About: React.FC = () => {
  return (
    <Container maxWidth="xl" className="flex flex-col pt-32 pb-32 sm:pb-0">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Colorazzo
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Colorazzo! This project is designed to help you manage and
          explore colors in a fun and interactive way.
        </Typography>
        <Typography variant="body1" paragraph>
          Our goal is to provide a comprehensive tool for designers, artists,
          and anyone who loves colors. Whether you're looking for inspiration,
          trying to find the perfect palette, or just want to play around with
          different shades, Colorazzo has something for you.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for visiting and we hope you enjoy using Colorazzo!
        </Typography>
      </Box>
    </Container>
  )
}

export default About
