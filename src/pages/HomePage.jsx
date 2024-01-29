import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'
export default function HomePage() {
  return (
    <div className='home-content'>
       <h1>My home page</h1>
      <p>
        link <Link to="/products">link to</Link>
      </p>
    </div>
  )
}
