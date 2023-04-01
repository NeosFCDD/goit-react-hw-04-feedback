import React, {Component} from "react";
import { Statistics } from "components/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Section } from "components/Section";
import { Notification } from "components/Notification";
import css from "components/Feedback.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = (e) => {
      const label  = e.target.name;
      this.setState ((prevState) => {
          return { [label]: prevState[label] + 1 };
      });
  };

  countTotalFeedback = ( ) => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = ( ) => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  };

  render() {
    return (
      <div className = {css.wrapper}>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!this.state.good && !this.state.neutral && !this.state.bad ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;