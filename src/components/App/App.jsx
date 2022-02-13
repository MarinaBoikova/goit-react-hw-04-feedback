import React from 'react';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Sections/Sections';
import s from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increasesCounter = evn => {
    switch (evn.target.id) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.ceil((good / (good + neutral + bad)) * 100);
    return positivePercentage;
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={increasesCounter} />
      </Section>
      <Section>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            total={countTotalFeedback}
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// increasesCounter = evn => {
//   this.setState(prevState => {
//     if (evn.target.id === 'good') {
//       return { good: prevState.good + 1 };
//     }
//     if (evn.target.id === 'neutral') {
//       return { neutral: prevState.neutral + 1 };
//     }
//     if (evn.target.id === 'bad') {
//       return { bad: prevState.bad + 1 };
//     }
//     this.countTotalFeedback();
//   });
// };

// countPositiveFeedbackPercentage = () => {
//   const positivePercentage = Math.ceil(
//     (this.state.good /
//       (this.state.good + this.state.neutral + this.state.bad)) *
//       100,
//   );
//   return positivePercentage;
// };

//   render() {
//     return (
//       <div className={s.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions onLeaveFeedback={this.increasesCounter} />
//         </Section>
//         <Section>
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               total={this.countTotalFeedback}
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
