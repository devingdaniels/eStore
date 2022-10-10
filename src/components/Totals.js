import React from 'react'

const totalStyle= {
  border: '3px solid darkblue',
  width: "max-content",
  padding: "8px",
  margin: '2em auto 0 auto'
}

const Totals = ({total}) => {
  return (
   <div style={totalStyle}>Total Items: {total}</div>
  )
}

export default Totals