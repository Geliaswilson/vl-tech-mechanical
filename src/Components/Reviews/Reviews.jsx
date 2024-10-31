import "./Reviews.scss";
import axios from "axios";
import { useState } from "react";

function AddReview() {
  const [name, setName] = useState("");
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/reviews", {
        name,
        stars,
        comment,
      });
      console.log("Review added", response.data);
      setName("");
      setStars(5);
      setComment("");
    } catch (error) {
      console.error("Error adding review", error);
    }
  };
  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2 className="review-form__title">Leave a Review</h2>
      <div className="review-form__field">
        <label className="review-form__label">Name:</label>
        <input
          type="text"
          className="review-form__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="review-form__field">
          <label className="review-form__label">Stars:</label>
          <select
            className="eview-form__select"
            value={stars}
            onChange={(e) => setStars(Number(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="review-form__field">
          <label className="review-form__label">Comment:</label>
          <textarea
            className="review-form__textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="review-form__button">
          Submit Review
        </button>
      </div>
    </form>
  );
}

export default AddReview