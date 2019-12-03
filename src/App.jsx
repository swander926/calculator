import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { tsConstructorType } from '@babel/types'

const App = () => {
  const [data, setData] = useState('')

  const userInput = input => {
    setData(previous => {
      return previous + input
    })
  }

  const reset = () => {
    setData([])
  }

  const math = () => {
    if (data[1] === '/') {
      setData(parseInt(data[0]) / parseInt(data[2]))
    } else if (data[1] === '-') {
      setData(parseInt(data[0]) - parseInt(data[2]))
    } else if (data[1] === '+') {
      setData(parseInt(data[0]) + parseInt(data[2]))
    } else if (data[1] === '*') {
      setData(parseInt(data[0]) * parseInt(data[2]))
    }
  }

  return (
    <>
      <div className="app">
        <div className="calc-wrapper">
          <div className="input">{data}</div>
          <section className="resetRow">
            <button className="resetButton" onClick={() => reset()}>
              AC
            </button>
          </section>
          <section className="row">
            <button className="numberButton" onClick={() => userInput('7')}>
              7
            </button>
            <button className="numberButton" onClick={() => userInput('8')}>
              8
            </button>
            <button className="numberButton" onClick={() => userInput('9')}>
              9
            </button>
            <button
              className="addDivideEquateButtons"
              onClick={() => userInput('/')}
            >
              ÷
            </button>
          </section>
          <section className="row">
            <button className="numberButton" onClick={() => userInput('4')}>
              4
            </button>
            <button className="numberButton" onClick={() => userInput('5')}>
              5
            </button>
            <button className="numberButton" onClick={() => userInput('6')}>
              6
            </button>
            <button className="mathButton" onClick={() => userInput('*')}>
              X
            </button>
          </section>
          <section className="row">
            <button className="numberButton" onClick={() => userInput('1')}>
              1
            </button>
            <button className="numberButton" onClick={() => userInput('2')}>
              2
            </button>
            <button className="numberButton" onClick={() => userInput('3')}>
              3
            </button>
            <button className="subButton" onClick={() => userInput('-')}>
              -
            </button>
          </section>
          <section className="row">
            <button className="numberButton" onClick={() => userInput('0')}>
              0
            </button>
            <button className="addDivideEquateButtons" onClick={() => math()}>
              =
            </button>
            <button
              className="addDivideEquateButtons"
              onClick={() => userInput('+')}
            >
              +
            </button>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
