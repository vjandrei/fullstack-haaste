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
  const [goodValue, setGood] = useState(0)
  const [neutralValue, setNeutral] = useState(0)
  const [badValue, setBad] = useState(0)
  const [badNegativeValue, setBadSum] = useState(0)
  const [allClicksCount, setAll] = useState(0)
  
  const clickGood = (newValue) => {
    setGood(goodValue + newValue) 
    setAll(allClicksCount + newValue)
  }

  const clickNeutral = (newValue) => { 
    setNeutral(neutralValue + newValue)
    setAll(allClicksCount + newValue)
  }

  const clickDad = (newValue) => { 
    setBad(badValue + newValue)
    setBadSum(badNegativeValue - newValue)
    setAll(allClicksCount + newValue)
  }

  let average = (goodValue + badNegativeValue) / allClicksCount;
  let positive = (goodValue / allClicksCount) * 100;

  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => clickGood(1)}  name={goodText} />
        <Button handleClick={() => clickNeutral(1)}  name={neutralText} />
        <Button handleClick={() => clickDad(1)}  name={badText} />
        <h1>Statistic</h1>
        <ul>
            <li>Good: {goodValue}</li>
            <li>Neutral: {neutralValue}</li>
            <li>Dad: {badValue}</li>
            <li>All: {allClicksCount}</li>
            <li>Average: {average}</li>
            <li>Positive: {positive}%</li>
        </ul>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)