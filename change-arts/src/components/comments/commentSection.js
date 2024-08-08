

import React from "react";
import styled from "styled-components"
import 'primeicons/primeicons.css';
import '../comments/commentSection.css'
import { Link } from'react-router-dom';

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593",
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457",
    },
  };

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  border-radius: 5px;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

function clickMe() {
    alert("Please fill out the form!");
  }

  const reviews = [
    {
      name: "Bhakti",
      rating: 5,
      title: "Good",
      date: "July 25, 2023",
      location: "Washington",
      comment: "Personal|Information|No|N/A",
    },
    {
      name: "Frank",
      rating: 5,
      title: "Good",
      date: "June 25, 2024",
      location: "Washington",
      comment: "Primary Teaching Material|Information|No|highly recommend for highschoolers",
    },
    {
      name: "Coomar",
      rating: 2,
      title: "Mid",
      date: "July 25, 2024",
      location: "Arkansas",
      comment: "Personal|Information|Yes|N/A",
    },
  ];

  const ReviewItem = (review) => {
   const {name, rating, title, date, location, comment} = review.review
    return (
      <div className="review-item">
        <div className="review-header">

          <span >
          <i className="pi pi-user" style={{ color: '#708090', paddingRight:'10px'}}></i><b>
            {name}</b></span>


        </div>
        <div className="review-subheader-stars">
        <span style={{paddingRight:'10px'}}>{"★".repeat(rating)}</span>
        <span style={{color:'#1b70eb'}}>{title}</span>
        </div>
        <div className="review-subheader">
        <span>Reviewed in {location} on {date}</span>
        </div>
        <div className="review-comment">
            <div>
                Use: {comment.split('|')[0]}<br/>
                Favorite Aspect of Resource: {comment.split('|')[1]}<br/>
                Any technical issue: {comment.split('|')[2]}<br/>
                Other comments: {comment.split('|')[3]}<br/>
            </div>
        </div>
        <div className="review-actions">
          <button className="review-action-button-helpful">Helpful</button>
          <button className="review-action-button-report">Report</button>
        </div>
      </div>
    );
  };

export default function CreateComments() {
    return (
    <>
    <div style={{paddingLeft:'10px'}}>
    <Link to="/feedback">
        <Button theme="pink">
          Add Feedback
        </Button>
      </Link>
      </div>

    <div className="CommentSection">
      <div className="review-filter">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort">
          <option value="most-recent">Most recent</option>
          <option value="highest-rating">Highest rating</option>
          <option value="lowest-rating">Lowest rating</option>
        </select>
      </div>
      <div className="review-list">
        {reviews.map((review) => (
          <ReviewItem review = {review}/>
        ))}
      </div>
    </div>
    </>
  );
}

