import styles from "./Feedback.module.css";

const Feedback = ({ review, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={styles.list}>
        <li>Good: {review.good}</li>
        <li>Neutral: {review.neutral}</li>
        <li>Bad: {review.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
