import React, { useState } from 'react'

function NewReview({onAddReview}) {
    const [formData, setFormData] = useState({
    })

    function handleSubmit(e){
        e.preventDefault();

        console.log(formData)

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({body:formData.body})
    })
           .then(response => response.json())
           .then((data) => {
           setFormData(data)
    })
}
     console.log(formData) 
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
          });
    }
  return (
    <div>
        <p style={{marginLeft:"50px"}}>Add Your Review</p>
        <form className='review-form' onSubmit={handleSubmit}>
            <input className="input" type="text" name="body" placeholder='Add Your Comment...'  onChange={handleChange} />
            <button type="submit" className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewReview;