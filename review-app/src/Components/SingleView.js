import { React, useState } from 'react';
import Review from './Review';
import './SingleView.css';
import moment from 'moment';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from "@fortawesome/free-solid-svg-icons"

const SingleView = ({ review }) => {
  const [reviewResponse, setReviewResponse] = useState("");
  const [userName, setUserName] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [responseDate, setResponseDate] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    setShowResponse(!showResponse)
  }; 

  const handleCommentEdit = () => {
    setShowResponse(false)
  }

  return(
    <div className="singleViewContainer">
      <div className="reviewFullWidth">
        <Review review={review} />
      </div> 

      {!showResponse &&
        <div className="commentContainer">
          <form>
            <label>Name: 
              <input 
                type="text" 
                name="name" 
                onChange={event => setUserName(event.target.value)}
                value={userName}
                />
            </label>
            <label className="responseForm">Response: 
              <textarea 
                type="text" 
                name="comment" 
                height="100px" 
                onChange={event => {setResponseDate(moment().format("MM/DD/YYYY")); setReviewResponse(event.target.value)}}
                value={reviewResponse}
                className="responseInput"
                />
            </label>
            <button onClick={handleSubmit} className="submitFormBtn">SUBMIT</button>       
          </form>
        </div>
      }

      {showResponse &&
      <div className="commentContainer">
        <div className="responseContainer">
          <FontAwesomeIcon icon={faReply} className="faIcons" />
          <div className="reviewContentArea">
            <p>{reviewResponse}</p>
            <p className="reviewFooter">
              <span className="reviewAuthor">{userName}</span>
              <span className="reviewDate">{responseDate}</span>
            </p>
          </div>
        </div>
        <button onClick={handleCommentEdit} className="editBtn">
          <FontAwesomeIcon icon={faEllipsis} className="faIcons" />
          <p className="hoverText">Edit Response</p>
        </button>
      </div>
      }
    </div>
  )
}

export default SingleView;