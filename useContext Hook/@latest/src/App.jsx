import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComponentA  from './Components/ComponentA.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <ComponentA />
    </div>
  )
}

export default App
