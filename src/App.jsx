import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [review, setReview] = useState(() => {
    const savedData = window.localStorage.getItem("review");
    if (savedData !== null) {
      JSON.parse(savedData);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify({ review }));
  }, [review]);

  const totalFeedback = review.good + review.neutral + review.bad;
  const positiveFeedback = Math.round((review.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    setReview({ ...review, [feedbackType]: review[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setReview({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          review={review}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
