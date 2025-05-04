import React from 'react';

const Feedback = ({ totalFeedback, good, neutral, bad  }) => {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
