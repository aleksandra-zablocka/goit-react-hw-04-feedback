// import React, { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      {/* <h2>Statistics</h2> */}
      <div className={css.results}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div className={css.summary}>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;


// class Statistics extends Component {
//   render() {
//     const { good, neutral, bad } = this.props;
//     const total = good + neutral + bad;
//     const positivePercentage =
//       total !== 0 ? ((good / total) * 100).toFixed(0) : '';
      
//     return (
//       <div className={css.statistics}>
//         <h2>Statistics</h2>
//         <div className={css.results}>
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//         </div>
//         <div className={css.summary}>
//           <p>Total: {total}</p>
//           <p>Positive feedback: {positivePercentage}%</p>
//         </div>
//       </div>
//     );
//   }
// }

// Statistics.propTypes = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
// }

// export default Statistics;
