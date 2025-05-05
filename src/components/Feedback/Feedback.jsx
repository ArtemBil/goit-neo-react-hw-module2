import React from 'react';

const Feedback = ({ totalFeedback, positiveFeedback, good, neutral, bad  }) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive: {positiveFeedback}%</p>
  </div>
);

export default Feedback;
