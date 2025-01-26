import NavigationButton from '@/components/atoms/NavigationButton'
import Link from 'next/link'
import React from 'react'

const NavbarNavigation: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', gap: '1rem' }}
      data-testid="navbar-navigation"
    >
      <Link href="/" passHref>
        <NavigationButton label="Home" />
      </Link>
      <Link href="/about" passHref>
        <NavigationButton label="About" />
      </Link>
    </div>
  )
}

export default NavbarNavigation
