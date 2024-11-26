import React from 'react'
import { useState, useEffect } from 'react'
import './CadCarros.css'

const url = "http://localhost:3000/register"

export const CadCarros = () => {

    //get
    const [register, setRegister] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch(url);
            const data = await res.json();
            setRegister(data);
        }
        getData();
    }, []);

    //Envio de dados
    const [modelo, setModelo] = useState("")
    const [placa, setPlaca] = useState("")
    const [marca, setMarca] = useState("")
    const [cor, setCor] = useState("")
    const [fabricacao, setFabricacao] = useState("")
    const [nome, setNome] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")

    const handleSubmit = async (e) => {
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
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
        });

        const addedRegister = await res.json();
        setRegister((prevRegister) => [...prevRegister, addedRegister])
    }

    return (
        <div id='container'>
            <div className='container-cad'>
                <div>
                    <form id="cad-carros" onSubmit={handleSubmit}>
                        <div id='car-register'>
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
                        </div>
                        <div id='car-owner'>
                            <div >
                                <label>
                                    <span>Nome:</span>
                                    <input 
                                        type="text"
                                        onChange={(e) => setNome(e.target.value)}
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
                        </div>
                        <input type="submit" value="ENVIAR" />
                    </form>
                </div>
            </div>
            <hr />
            <h1>Dados cadastrados</h1>
            <table id='table'>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Cor</th>
                        <th>Fabricação</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {register.map((registers) => (
                        <tr key={registers.id}>
                            <td>{registers.modelo}</td>
                            <td>{registers.placa}</td>
                            <td>{registers.marca}</td>
                            <td>{registers.cor}</td>
                            <td>{registers.fabricacao}</td>
                            <td>{registers.nome}</td>
                            <td>{registers.endereco}</td>
                            <td>{registers.telefone}</td>
                            <td>{registers.cpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
