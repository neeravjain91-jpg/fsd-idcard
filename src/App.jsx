import './App.css'
import ICard from './component/ICard'
import ICardGallery from './component/ICardGallery'
import ImdbCard from './component/ImdbCard'
import StateHandling from './component/StateHandling'
import Imagemanipulation from './component/Imagemanipulation'
import SampleUseEffect from './component/SampleUseEffect'

function App() {
  return (
    <div>
      {/* Switch the active component by uncommenting one of the examples below. */}
      {/* <ICardGallery /> */}
      {/* <ImdbCard /> */}
      {/* <StateHandling /> */}
      {/* <Imagemanipulation /> */}
      <SampleUseEffect />
    </div>
  )
}

export default App
