import { useState } from 'react'
import './App.css'
import { CadCarros } from './CadCarros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Cadastro de Carros</h1>
      <CadCarros />
      <h1>Dados cadastrados</h1>
    </div>
  )
}

export default App
