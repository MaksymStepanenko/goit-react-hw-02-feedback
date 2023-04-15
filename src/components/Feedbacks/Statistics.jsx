import React from "react"
import css from './Feedbacks.module.css'

export default function Statistics({ good, neutral, bad }) {
    return (
        <div className = { css.spanwrap } >
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>
            Total: {good + neutral + bad}
          </span>
          <span>
            Positive feedback:
            {(
              (good /
                (neutral + bad + good)) *
              100
            ).toFixed(0)}
            %
          </span>
        </div >
    )
}
