import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer className="py-2 w-full text-center">
      <Typography variant="body2" style={{ color: '#e0e0e0' }}>
        Created by <strong>DewXIT Marcin Falkowski</strong>{' '}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}

export default Footer
