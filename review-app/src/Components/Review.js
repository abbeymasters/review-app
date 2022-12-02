import { React } from 'react';
import "./Review.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import moment from 'moment'

const Review = ({ review }) => {

  const publishedDate = moment(review.published_at).format('MM/DD/YYYY')
  let starRating = []
  for(let i = 0; i < +review.rating; i++) {
    starRating.push(<FontAwesomeIcon icon={faStar} className="stars" />);
  }
  return(
    <div>
      <div className="reviewInformation">
        <p className="reviewTitle">{review.place}</p>
        <p>{starRating}</p>
        <p className="reviewContent">{review.content}</p>
      </div>
      <p className="reviewFooter">
        <span className="reviewAuthor">{review.author}</span>
        <span className="reviewDate">{publishedDate}</span>
      </p>
    </div>
  );
}

export default Review;