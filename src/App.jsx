import { useState, useEffect } from 'react'
import './App.css'
import { CadCarros } from './CadCarros'
import { ListCad } from './ListCad'

const url = "http://localhost:3000/register"

function App() {
  const [register, setRegister] = useState([]);

  useEffect(() => {
    console.log("Carregou")
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    }
    getData();
  }, []);

  return (
    <div className='container'>
      <h1>Cadastro de Carros</h1>
      <CadCarros />
      <h1>Dados cadastrados</h1>
      <ListCad />
    </div>
  )
}

export default App
