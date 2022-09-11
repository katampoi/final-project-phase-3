import React, { useEffect, useState } from 'react'

function Airline() {
    const [airlines, setAirLine = useState ([])]

    useEffect(() =>{
        fetch("http://localhost:9292/")
    })
  return (
    <div>
      
    </div>
  )
}

export default Airline
