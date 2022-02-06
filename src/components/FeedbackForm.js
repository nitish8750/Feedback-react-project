import { useState, useContext, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import RatingCard from "./RatingCard";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMesssage] = useState("");
  const [isBtnDsiabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text === "") {
      setIsBtnDisabled(true);
      setMesssage("");
    } else if (text !== "" && text.length < 10) {
      setIsBtnDisabled(true);
      setMesssage("Please enter feedback more than 10 characters");
    } else {
      setIsBtnDisabled(false);
      setMesssage("");
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
              addFeedback(newFeedback);

      }
      setText("");
    }
  };
  const handleSelected = (value) => {
    setRating(value);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service with us</h2>
        <RatingCard handleSelected={handleSelected} />
        <div className="input-group">
          <input type="text" value={text} onChange={handleInputChange} />
          <Button type="submit" isDisabled={isBtnDsiabled}>
            Send{" "}
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
