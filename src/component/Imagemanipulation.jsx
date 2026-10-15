import { useState } from 'react'
import photos from '../assets/photos.jpg'

function Imagemanipulation() {
  const [photosHeight, setPhotosHeight] = useState(200)
  const [photosWidth, setPhotosWidth] = useState(200)
  const [photosAngle, setPhotosAngle] = useState(30)
  const [boxMarginLeft, setBoxMarginLeft] = useState(200)

  function setHeight() {
    setPhotosHeight((height) => height + 10)
  }

  function setWidth() {
    setPhotosWidth((width) => width + 10)
  }

  function setAngle() {
    setPhotosAngle((angle) => angle + 30)
  }

  function moveLeft() {
    setBoxMarginLeft((margin) => margin - 50)
  }

  function moveRight() {
    setBoxMarginLeft((margin) => margin + 50)
  }

  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}>
        Image Manipulation
      </h2>

      <div
        style={{
          border: '2px solid red',
          height: '400px',
          width: '400px',
          marginLeft: `${boxMarginLeft}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        <img
          src={photos}
          height={photosHeight}
          width={photosWidth}
          style={{ transform: `rotate(${photosAngle}deg)` }}
          alt="Image being manipulated"
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
        <button onClick={setHeight}>Enhance Height</button>
        <button onClick={setWidth}>Enhance Width</button>
        <button onClick={setAngle}>Rotate 30°</button>
        <button onClick={moveLeft}>Move Left</button>
        <button onClick={moveRight}>Move Right</button>
      </div>

      <p>Height: {photosHeight}px | Width: {photosWidth}px | Rotation: {photosAngle}°</p>
    </div>
  )
}

export default Imagemanipulation
