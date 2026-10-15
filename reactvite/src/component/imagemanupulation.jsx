import { useState } from 'react'
import cat from '../images/cat.png'

function ImageManipulation() {
  const [height, setHeight] = useState(200)
  const [width, setWidth] = useState(200)
  const [rotation, setRotation] = useState(0)

  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}>
        Image Manipulation
      </h2>
      <div
        style={{
          border: '2px solid red',
          minHeight: '400px',
          width: 'min(400px, 90vw)',
          marginLeft: '10px',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <img
          src={cat}
          height={height}
          width={width}
          alt="Cat"
          style={{
            maxWidth: '100%',
            maxHeight: '360px',
            objectFit: 'contain',
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
        <button onClick={() => setHeight((value) => Math.min(value + 10, 360))}>
          Increase height
        </button>
        <button onClick={() => setHeight((value) => Math.max(value - 10, 50))}>
          Decrease height
        </button>
        <button onClick={() => setWidth((value) => Math.min(value + 10, 360))}>
          Increase width
        </button>
        <button onClick={() => setWidth((value) => Math.max(value - 10, 50))}>
          Decrease width
        </button>
        <button onClick={() => setRotation((value) => value + 30)}>
          Rotate 30°
        </button>
        <button onClick={() => setRotation(0)}>Reset rotation</button>
      </div>
    </div>
  )
}

export default ImageManipulation
