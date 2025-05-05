import React from 'react';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => (
  <div className="option-actions">
    <button type="button" onClick={updateFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={updateFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={updateFeedback('bad')}>
      Bad
    </button>
    {totalFeedback ? (
      <button type="button" onClick={resetFeedback}>
        Reset
      </button>
    ) : null}
  </div>
);

export default Options;
