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
  const [allClicks, setAll] = useState(0)
  
  const [value, setValue] = useState()

  const clickGood = (newValue) => {
    setValue(newValue)
    setGood(good + 1) 
    setAll(allClicks + 1)
  }

  const clickNeutral = (newValue) => { 
    setValue(newValue)
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }

  const clickDad = (newValue) => { 
    setValue(newValue)
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => clickGood(1)}  name={goodText} />
        <Button handleClick={() => clickNeutral(0)}  name={neutralText} />
        <Button handleClick={() => clickDad(-1)}  name={badText} />
        <h1>Statistic</h1>
        <ul>
            <li>Good: {good} {value}</li>
            <li>Neutral: {neutral}</li>
            <li>Dad: {bad}</li>
            <li>All: {allClicks}</li>
            <li>Average:</li>
            <li>Positive: </li>
        </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)