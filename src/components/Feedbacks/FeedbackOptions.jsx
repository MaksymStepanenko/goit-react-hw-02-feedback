import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

export default function FeedbackOptions({ countGood, countNeutral, countBad }) {
  return (
    <div className={css.btnwrapper}>
      <button onClick={countGood} className={css.btn}>
        Good
      </button>
      <button onClick={countNeutral} className={css.btn}>
        Neutral
      </button>
      <button onClick={countBad} className={css.btn}>
        Bad
      </button>
    </div>
  );
}
