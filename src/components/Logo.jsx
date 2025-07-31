import React from 'react'
import logo from '../assets/logo.png' // Adjust path as needed

function Logo({ width = '100px' }) {
  return (
    <img src={logo} alt="Logo" style={{ width }} />
  )
}

export default Logo
