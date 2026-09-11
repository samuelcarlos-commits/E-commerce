import { useState } from 'react'
import Navbar from './Navbar'
import Produto from './Produto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Produto></Produto>
    </>
  )
}

export default App
