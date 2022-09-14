import React from 'react'

function Review({review, onDelete}) {
    

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDelete(review));
  }

  
  return (
    <div className='rev'>
      <div>
      <span className='body'>Comment: {review.body}</span>
      </div>
      <div>
      <button onClick={handleDeleteClick} className="del">Delete</button>
    </div>
    </div>
  )
}

export default Review