import React from 'react'

const styles = {
    background: 'lightgray',
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    color: 'darkblue'
}

const Card = ({ children }) => {
  return (
    <div style={styles}>{children}</div>
  )
}

export default Card