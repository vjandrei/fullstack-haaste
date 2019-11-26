import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, name}) => {
  return (
    <div>
        <button onClick={handleClick}>{name}</button>
    </div>
  )
}

const Statistic = ({value, name, percentage}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value} {percentage}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, clicks, average, positive } = props
  if(props.clicks === 0 ){
    return (
      <div>
        No feeback given
      </div>
    )
  } 
  return (
    <table>
        <tbody>
        <Statistic name="Good" value={good}/> 
        <Statistic name="Neutral" value={neutral}/>
        <Statistic name="Dad" value={bad}/>
        <Statistic name="All" value={clicks}/>
        <Statistic name="Average" value={average}/>
        <Statistic name="Positive" value={positive} percentage="%"/>
        </tbody>
    </table>
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