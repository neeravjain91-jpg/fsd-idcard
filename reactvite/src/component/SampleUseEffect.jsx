import { useEffect, useState } from 'react'

function SampleUseEffect() {
  const [counter, setCounter] = useState(0)
  const [pointer, setPointer] = useState(100)

  useEffect(() => {
    console.log('Counter=' + counter)
    console.log('Pointer=' + pointer)
  }, [counter, pointer])

  function setCount() {
    setCounter((value) => value + 5)
  }

  function setPointerValue() {
    setPointer((value) => value - 5)
  }

  return (
    <div>
      <h2 style={{ color: 'brown' }}>SampleUseEffect</h2>
      <h1>Counter Value={counter}</h1>
      <h1>Pointer Value={pointer}</h1>
      <button onClick={setCount}>Counter</button>
      <button onClick={setPointerValue}>Pointer</button>
    </div>
  )
}

export default SampleUseEffect
