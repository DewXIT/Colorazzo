import { Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <footer
      className="flex justify-center items-center w-full text-center text-sm"
      style={{
        bottom: 0,
        padding: 20,
        background: '#1e1e1e',
      }}
    >
      <Typography variant="body2" style={{ color: '#e0e0e0' }}>
        Created by <strong>DewXIT Marcin Falkowski</strong>{' '}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}

export default Footer
