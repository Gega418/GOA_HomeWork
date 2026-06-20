import { useState } from 'react'
import './App.css'

let timerInterval = null

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const startTimer = () => {
    if(time <= 0) return

    timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if(prevTime <= 1){
          clearInterval(timerInterval)
          timerInterval = null
          return 0
        }
        return prevTime - 1
      })
    }, 1000);
  }
  
  const stopTimer = () => {
    clearInterval(timerInterval)
    timerInterval = null
  }

  return (
    <div className='box'>
      <input type="number" placeholder='წამები' name='number' onChange={(e) => setTime(Number(e.target.value))} readOnly={isRunning} />
      <h1>{time}</h1>
      <div className='btns'>
        <button onClick={(startTimer)}>start</button>
        <button onClick={stopTimer}>stop</button>
      </div>
    </div>

  )
}

export default App
