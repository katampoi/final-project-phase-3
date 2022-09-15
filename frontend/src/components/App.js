import React, { useState,useEffect } from 'react'
import Nav from './Nav'
import About from './About'
import View from './View'
import Airline from './Airline'
import Review from './Review'
import NewReview from './NewReview'



function App() {
  
  const [reviews, setReviews]=useState([])
    useEffect(() => {
      fetch("http://localhost:9292/reviews")
      .then((response) => response.json())
      .then((data) =>{
        setReviews(data)
      })
    },[]);

    function addReview (newReview){
      setReviews([...reviews, newReview])
    }

    function deleteAirLine(deletedAirLine){
      const updatedAirline = reviews.filter((review) => review.id !== deletedAirLine.id)
      setReviews(updatedAirline)
    }

  return (
    <div >
      <Nav />
      <About />
      <View />
      <Airline />
     

    <div className='cust-rev'>
      <h3>Our Reviews</h3>
      <ul className="Reviews">
        {reviews.map((review) => (
          <Review id={review.id} key={review.id} review={review}  onDelete={deleteAirLine} />
        ))}
      </ul>
      <NewReview onAddReview={addReview}/>
    </div>
    </div>
  )
}


export default App
