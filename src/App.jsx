import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';
import { useEffect, useState } from 'react';

function App() {
  const [reviews, setReviews] = useState(() => {
    const reviewsDefault = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    try {
      const savedReviews = JSON.parse(localStorage.getItem('reviews'));

      return savedReviews ? savedReviews : reviewsDefault;
    } catch (e) {
      console.error(e);
      return reviewsDefault;
    }
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => () => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback ? (
        <Feedback {...reviews} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
