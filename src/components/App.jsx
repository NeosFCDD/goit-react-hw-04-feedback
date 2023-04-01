import React, { useState } from "react";
import { Statistics } from "components/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Section } from "components/Section";
import { Notification } from "components/Notification";
import css from "components/Feedback.module.css";

function App( ) {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  
  const onLeaveFeedback = (e) => {
      const label  = e.target.name;

      switch (label) {
        case "good":
          setGood (state => state + 1);
          break;
        
        case "neutral":
            setNeutral (state => state + 1);
            break;
            
        case "bad":
           setBad (state => state + 1);
           break;

        default:
          return;
      }
  };

  const countTotalFeedback = ( ) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ( ) => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
      <div className = {css.wrapper}>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(feedbackOptions)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!good && !neutral && !bad ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
}

export default App;