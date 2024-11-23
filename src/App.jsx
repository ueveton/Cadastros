import { useState, useEffect } from 'react'
import './App.css'
import { CadCarros } from './CadCarros'
import { ListCad } from './ListCad'

function App() {

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
