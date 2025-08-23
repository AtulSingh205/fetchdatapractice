import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
       <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "10px",
          width: "250px",
          border: "1px solid gray",
          borderRadius: "8px",
          outline: "none",
        }}
      />
    </div>
  )
}

export default Homepage
