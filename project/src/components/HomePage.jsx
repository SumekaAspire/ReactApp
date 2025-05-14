import { useState } from 'react'
import '../App.css'

function HomePage() {

  return (
    <div style={{ backgroundColor:"teal",padding: '10px', fontFamily: 'Arial, sans-serif',
       textAlign: 'center',height: '100vh', width:'170vh'  }}>
      <div>

        <h2>HomePage</h2>
      </div>
      <div className="marquee">
      <div className="marquee-content">
        Sample project is created using react and Node.js!
      </div>
    </div>
     
      
      
    </div>
  )
}

export default HomePage
