import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, name}) => {
    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodText = "good"
  const neutralText = "neutral"
  const badText = "bad"

  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)}  name={goodText} />
        <Button handleClick={() => setNeutral(neutral + 1)}  name={neutralText} />
        <Button handleClick={() => setBad(bad + 1)}  name={badText} />
        <h1>Statistic</h1>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Dad: {bad}</li>
        </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)