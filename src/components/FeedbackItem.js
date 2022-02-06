import { FaEdit, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
    rating: PropTypes.number,
    
}

export default FeedbackItem
