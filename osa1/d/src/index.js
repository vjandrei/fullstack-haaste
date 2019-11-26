import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, name}) => {
    return (
        <div>
            <button onClick={handleClick}>{name}</button>
        </div>
    )
}

const Statistic = (props) => {
  return (
    <li>{props.name} {props.value}</li>
  )
}

const Statistics = (props) => {
  if(props.clicks === 0 ){
    return (
      <div>
        No feeback given
      </div>
    )
  } 
  return (
    <ul>
      <Statistic name="Good" value={props.good}/> 
      <Statistic name="Neutral" value={props.neutral}/>
      <Statistic name="Dad" value={props.bad}/>
      <Statistic name="All" value={props.clicks}/>
      <Statistic name="Average" value={props.average}/>
      <Statistic name="Positive" value={props.positive}/>
    </ul>
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
        <Statistics 
         good={goodValue} 
         neutral={neutralValue} 
         bad={badValue}
         clicks={allClicksCount}
         average={average}
         positive={positive}
        />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)