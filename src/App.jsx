import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from "./component/ICard";
import StateHandling from "./statehandling";

function App() {
  return (
    <div style={{ border: '2px solid black' }}>
      <ICard />
      <StateHandling />
    </div>
  );
}

export default App;
