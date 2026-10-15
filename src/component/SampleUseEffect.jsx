import { useEffect, useState } from 'react'

function SampleUseEffect() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Counter=' + counter)
  }, [counter])

  function setCount() {
    setCounter((current) => current + 5)
  }

  return (
    <div>
      <h2 style={{ color: 'brown' }}>SampleUseEffect</h2>
      <h1>Counter Value={counter}</h1>
      <button onClick={setCount}>Counter</button>
    </div>
  )
}

export default SampleUseEffect
