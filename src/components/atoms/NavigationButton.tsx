import { Button } from '@mui/material'
import React from 'react'

interface INavigationButtonProps {
  label: string
}

const NavigationButton: React.FC<INavigationButtonProps> = ({ label }) => {
  return (
    <Button
      style={{
        color: '#e0e0e0',
        fontWeight: 'medium',
        textTransform: 'none',
      }}
    >
      {label}
    </Button>
  )
}

export default NavigationButton
