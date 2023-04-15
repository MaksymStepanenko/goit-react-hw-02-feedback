import React from 'react';
import css from './Feedbacks.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedbacks extends React.Component {
  static default = {
    value: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  countNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  countBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            countBad={this.countBad}
            countGood={this.countGood}
            countNeutral={this.countNeutral}
          />
        </Section>
        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedbacks;

// Please leave feedback
// Statistics
