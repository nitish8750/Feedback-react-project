import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  const addFeedback = ({ text, rating }) => {
    const id = uuidv4();
    const newFeedback = {
      id,
      text,
      rating,
    };
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((data) => data.id !== id));
    }
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map(item => item.id === id ? {...item, ...updatedItem} : item))
  }

  const editFeedback = (item) =>{
    setFeedbackEdit({ item, edit: true });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
