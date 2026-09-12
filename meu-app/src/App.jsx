import { useState } from 'react'
import Navbar from './Navbar'
import Produto from './Produto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const produtos = []

  produtos.push({
    nome: "macumba",
    descricao: "amaldiçoe seus amigos!",
    preco: "9.99",
    imagem: "/assets/hero.png"
  })

  return (
    <>
      <Navbar></Navbar>
      <Produto produto={produtos[0]}></Produto>
    </>
  )
}

export default App
