import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const isOperator = userInput => {
  return !isNaN(userInput) || userInput === '.' || userInput === '='
}

const KeypadComponent = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : 'operator'
    }`}
  >
    {props.children}
  </div>
)

export default KeypadComponent
