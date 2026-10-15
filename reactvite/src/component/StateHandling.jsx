import { useState } from 'react'

function StateHandling() {
  const [counter, setCounter] = useState(20)
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  function changeBackgroundColor() {
    setRed(Math.floor(Math.random() * 256))
    setGreen(Math.floor(Math.random() * 256))
    setBlue(Math.floor(Math.random() * 256))
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        border: '2px solid red',
        height: '300px',
        width: '300px',
      }}
    >
      <h2 style={{ color: 'brown' }}>Counter App</h2>
      <h2>Counter={counter}</h2>
      <button onClick={() => setCounter((value) => value + 10)}>
        Increase counter
      </button>
      <button onClick={() => setCounter((value) => value - 5)}>
        Decrease counter
      </button>
      <button onClick={changeBackgroundColor}>Change background color</button>
    </div>
  )
}

export default StateHandling
