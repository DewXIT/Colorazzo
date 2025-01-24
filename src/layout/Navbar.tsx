import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import Link from 'next/link'

const Navbar = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#222222' }}>
      <Container maxWidth="xl">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          {/* Logo */}
          <Typography fontFamily={'monospace'}>Colorazzo</Typography>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" passHref>
              <Button
                style={{
                  color: '#e0e0e0',
                  fontWeight: 'medium',
                  textTransform: 'none',
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                style={{
                  color: '#e0e0e0',
                  fontWeight: 'medium',
                  textTransform: 'none',
                }}
              >
                About
              </Button>
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
