import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import ThankYou from './ThankYou/ThankYou';
import React, { useState } from 'react';

function App() {
  const [opinion, setOpinion] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotal = () => {
    const { good, neutral, bad } = opinion;
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    const { good } = opinion;
    const total = countTotal();
    return total !== 0 ? ((good / total) * 100).toFixed(0) : '';
  };

  const onLeaveFeedback = event => {
    const { name } = event.target;
    setOpinion(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const { good, neutral, bad } = opinion;
  const options = Object.keys(opinion);
  const totalFeedback = good + neutral + bad;
  return (
    <div>
      <form className={css.feedback}>
        <Section title="What is your opinion about Expresso Cafe?">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {totalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal()}
              positivePercentage={countPositivePercentage()}
            />
          </Section>
        ) : (
          <Section title="Statistics">
            <Notification message="There is no feedback yet" />
          </Section>
        )}

        {totalFeedback > 0 && (
          <Section title="Thank you">
            <ThankYou message="Thanks for your feedback. We hope to see you again!" />
          </Section>
        )}
      </form>
    </div>
  );
}

export default App;
