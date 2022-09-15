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


    function handleAddReview(newReview) {
      setReviews([...reviews, newReview]);
    }
  
    function handleDeleteReview(deletedReview){
      const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id)
      setReviews(updatedReviews)
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
          <Review id={review.id} key={review.id} review={review}  onDelete={handleDeleteReview} />
        ))}
      </ul>
      <NewReview onAddReview={handleAddReview}/>
    </div>
    </div>
  )
}


export default App
