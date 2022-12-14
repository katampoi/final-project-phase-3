import React,{useEffect, useState} from 'react'


function Airline() {

  const [airlines, setairLines] = useState ([])
    
      
  useEffect(() => {
    fetch("http://localhost:9292/airlines")
    .then((response) => response.json())
    .then((data) =>{
      setairLines(data)
      console.log(data)
    })
  },[]);

  
  return (
    <div className='air'>
      <div className='container'>
        <div className='content'>
        </div>
        {airlines.map((airline) => (
          <ol id={airline.id} key={airline.id} >
            <p>image_url:{airline.image_url}</p>
            <p>Name: {airline.name}</p>
            <p>slug: {airline.slug}</p>
          </ol>

        ))}
      </div>


    </div>
  )
}

export default Airline
