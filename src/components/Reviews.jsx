const Reviews = () => {
    const [reviews, setReviews] = useState([
      { id: 1, user: 'Alice', comment: 'Great experience!' },
      { id: 2, user: 'Bob', comment: 'Loved it, highly recommend!' }
    ]);
  
    return (
      <div className="reviews">
        <h1>Reviews</h1>
        <ul>
          {reviews.map(review => (
            <li key={review.id} className="review-item">
              <strong>{review.user}</strong>: {review.comment}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Reviews;
  