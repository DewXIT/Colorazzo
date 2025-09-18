import { Button } from '@mui/material'
import React from 'react'

interface INavigationButtonProps {
  label: string
}

const NavigationButton: React.FC<INavigationButtonProps> = ({ label }) => {
  return (
    <Button className="text-gray-200 hover:text-white normal-case font-medium">
      {label}
    </Button>
  )
}

export default NavigationButton
