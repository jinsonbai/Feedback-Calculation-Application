import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticipantForm from './components/ParticipantForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ParticipantForm />
    </>
  )
}

export default App
