import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div className="App">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onChange={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={50}
                color={currentRating <= (hover || rating) ? "#ffc107" : "white"}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <p>Your rating is {rating}</p>
    </>
  );
}

export default App;
