import NavbarNavigation from '@/components/molecules/NavbarNavigation'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#222222' }}>
      <Container maxWidth="xl">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0,
          }}
        >
          <Typography fontFamily={'monospace'}>Colorazzo</Typography>
          <NavbarNavigation />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
