import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exculsive offer on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='enter email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter