import React from 'react';

const Options = ({ updateFeedback, resetFeedback }) => (
  <div className="option-actions">
    <button type="button" onClick={updateFeedback('good')}>Good</button>
    <button type="button" onClick={updateFeedback('neutral')}>Neutral</button>
    <button type="button" onClick={updateFeedback('bad')}>Bad</button>
    <button type="button" onClick={resetFeedback}>Reset</button>
  </div>
);

export default Options;
