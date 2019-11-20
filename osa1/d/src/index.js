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

  const goodText = "good"
  const neutralText = "neutral"
  const badText = "bad" 

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => { setGood(good + 1)}
  const clickNeutral = () => { setNeutral(neutral + 1)}
  const clickDad = () => { setBad(bad + 1)}
  
  

  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={clickGood}  name={goodText} />
        <Button handleClick={clickNeutral}  name={neutralText} />
        <Button handleClick={clickDad}  name={badText} />
        <h1>Statistic</h1>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Dad: {bad}</li>
            <li>All: </li>
        </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)