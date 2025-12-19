import React from 'react'

interface INavigationButtonProps {
  label: string
}

const NavigationButton: React.FC<INavigationButtonProps> = ({ label }) => {
  return (
    <button className="text-gray-200 hover:text-white font-medium">
      {label}
    </button>
  )
}

export default NavigationButton
