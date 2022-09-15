import {useEffect} from 'react'

function Review({review, onDelete}) {
 

  useEffect(() => {
    fetch (`http://localhost:9292/reviews`)
    .then(response=> response.json())
    .then(data=> console.log(data))

  
  })

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
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