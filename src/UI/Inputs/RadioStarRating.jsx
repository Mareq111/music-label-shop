/* import { useState } from "react";
import IconStarFilled from "../Icons/IconStarFilled.jsx";
import IconStarEmpty from "../Icons/IconStarEmpty.jsx";
import "./RadioStarRating.scss";

export default function RadioStarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating">
      <div className="p-div-text">
        <p className="p-choose-stars">
          {rating > 0
            ? `You gave ${rating} ${rating === 1 ? "star" : "stars"}`
            : "Share your feedback! "}
        </p>
      </div>
      <div className="div-stars-wrapper">
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            className="label-radio-stars"
            key={value}
            onClick={() => handleStarClick(value)}
          >
            <input
              className="input-radio-stars"
              type="radio"
              name="rating"
              value={value}
              checked={value === rating}
              onChange={() => {}}
            />
            {value <= rating ? <IconStarFilled /> : <IconStarEmpty />}
          </label>
        ))}
      </div>
    </div>
  );
}
 */

import { useState } from "react";
import IconStarFilled from "../Icons/IconStarFilled.jsx";
import IconStarEmpty from "../Icons/IconStarEmpty.jsx";
import "./RadioStarRating.scss";

export default function RadioStarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleKeyDown = (event, value) => {
    if (event.key === "Enter") {
      setRating(value);
    }
  };

  return (
    <div className="star-rating">
      <div className="p-div-text">
        <p className="p-choose-stars">
          {rating > 0
            ? `You gave ${rating} ${rating === 1 ? "star" : "stars"}`
            : "Share your feedback! "}
        </p>
      </div>
      <div className="div-stars-wrapper">
        {[1, 2, 3, 4, 5].map((value) => (
          <label
            className="label-radio-stars"
            key={value}
            onClick={() => handleStarClick(value)}
            onKeyDown={(event) => handleKeyDown(event, value)}
            tabIndex={0}
          >
            <input
              className="input-radio-stars"
              type="radio"
              name="rating"
              value={value}
              checked={value === rating}
              onChange={() => {}}
            />
            {value <= rating ? <IconStarFilled /> : <IconStarEmpty />}
          </label>
        ))}
      </div>
    </div>
  );
}
