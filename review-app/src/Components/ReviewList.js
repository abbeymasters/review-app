import { React, useState } from 'react';
import Review from './Review';
import SingleView from './SingleView';
import "./ReviewList.css"

const ReviewList = ({ reviews }) => {
  const [singleReview, setSingleReview] = useState("")
  const [showReview, setShowReview] = useState(false)
  
  const handleClick = (event, review) => {
    setShowReview(!showReview);
    setSingleReview(review);
  }

  const mappedReview = reviews.map(review => {   
    return(
      <>
        <li key={review.id} data-testid="listItem" onClick={event => handleClick(event, review)}>
            <Review review={review} />
        </li>
      </>
    )
  })
  return(
    <>
    {!showReview &&
      <ul className="card">
        {mappedReview}
      </ul>
      }

      {showReview && 
      <div className="card">
        <SingleView review={singleReview} />  
      </div>}
    </>
  );
}

export default ReviewList;