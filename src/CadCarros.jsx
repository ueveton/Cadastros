import React from 'react'
import { useState, useEffect } from 'react'
import './CadCarros.css'

const url = "http://localhost:3000/register"

export const CadCarros = () => {

    //Envio de dados
    const [modelo, setModelo] = useState("")
    const [placa, setPlaca] = useState("")
    const [marca, setMarca] = useState("")
    const [cor, setCor] = useState("")
    const [fabricacao, setFabricacao] = useState("")
    const [nome, setnome] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const register = {
            modelo,
            placa,
            marca,
            cor,
            fabricacao,
            nome,
            endereco,
            telefone,
            cpf
        }
        console.log(register)
        const res =  fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
        })
    }

    return (
        <div id='container'>
            <div className='container-cad'>
                <div id='car-register'>
                    <h3>Dados do Carros</h3>
                    <form id="cad-carros" onSubmit={handleSubmit}>
                        <div>
                            <label>
                                <span>Modelo:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setModelo(e.target.value)}
                                    value={modelo}
                                    placeholder='Modelo do carro' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Placa:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setPlaca(e.target.value)}
                                    value={placa}
                                    placeholder='Digite a placa do carro' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Marca:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setMarca(e.target.value)}
                                    value={marca}
                                    placeholder='Digite a marca do carro' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Cor:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setCor(e.target.value)}
                                    value={cor}
                                    placeholder='Digite a cor do carro' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Fabricação:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setFabricacao(e.target.value)}
                                    value={fabricacao}
                                    placeholder='Digite o ano de fabricação do carro' 
                                />
                            </label>
                        </div>
                        
                    </form>
                </div>
                <div id='car-owner' onSubmit={handleSubmit}>
                    <form>
                        <div>
                            <h3>Dados do proprietario</h3>
                        </div>
                        <div>
                            <label>
                                <span>Nome:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setnome(e.target.value)}
                                    value={nome}
                                    placeholder='Digite o nome completo' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Endereço:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setEndereco(e.target.value)}
                                    value={endereco}
                                    placeholder='Digite o endereço completo' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Telefone:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setTelefone(e.target.value)}
                                    value={telefone}
                                    placeholder='Digite o telefone do proprietario' 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>CPF:</span>
                                <input 
                                    type="text"
                                    onChange={(e) => setCpf(e.target.value)}
                                    value={cpf}
                                    placeholder='Digite o cpf do proprietario' 
                                />
                            </label>
                        </div>
                        <input type="submit" value="ENVIAR" />
                    </form>
                </div>
            </div>
            <hr />
        </div>
    )
}
