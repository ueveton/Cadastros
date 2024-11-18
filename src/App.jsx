import { useState } from 'react'
import './App.css'
import { CadCarros } from './CadCarros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Cadastro de Carros</h1>
      <CadCarros />
    </div>
  )
}

export default App
