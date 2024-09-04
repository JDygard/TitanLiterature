import React from 'react';
import { useNavigate } from 'react-router';
import './BookDetails.css';


const BookDetails = () => {
  const navigate = useNavigate(); // we make a variable that points at the function

  const handleClick = (path) => { // and when someone clicks on the button
    navigate(path); // we navigate to the path defined
  };
  const openInNewTab = (url) => { // same as handleClick but opens the link in a new tab
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
  <section id="book-details" className="book-details">
    <div className="book-details__content">
      <div className="book-details__text">
        <h3 className="book-details__title">
          The debut novel of the Titan Chronology, “Children of Nemia” is available today
        </h3>
        {/* <a href="#purchase" className="btn btn-primary">Buy Now</a> */}
        <p className="book-details__description"> 
          Van is about to leave home on the journey of his lifetime. The pilgrimage marks a Nemian's coming of age
          and Van's been preparing for it since the day he was born, but he's about to learn the world is a much bigger 
          place than he was raised to believe-- and nothing could prepare him to face off against cosmic horrors from other worlds and the inconvenience of adolescent love, 
          which sometimes go hand in hand.
        </p>
        <h4 class="clickable" onClick={() => openInNewTab('/read')}>Read the first chapter</h4>
      </div>
      <div className="book-details__image">
        <img width="250px" src="images/bookcover_placeholder.png" alt="Children of Nemia" />
      </div>
    </div>
  </section>
  )
}

export default BookDetails;
