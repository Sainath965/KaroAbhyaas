// Write your JS code here
import React from 'react'

const Reviews = ({reviews}) => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
