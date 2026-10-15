import { useState } from 'react'

function StateHandling() {
  const [counter, setCounter] = useState(0)

  return (
    <div style={{ padding: '16px' }}>
      <h2>State Handling</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter((current) => current + 1)}>Increment</button>
      <button onClick={() => setCounter((current) => current - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default StateHandling
