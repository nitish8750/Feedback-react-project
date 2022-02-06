import FeedbackItem from "./FeedbackItem";
import { motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || !feedback.length) {
    return <div>No feedback</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((data) => (
        <motion.div
          key={data.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem key={data.id} item={data} />
        </motion.div>
      ))}
    </div>
  );
}

export default FeedbackList;
