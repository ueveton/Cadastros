import React from 'react'
import "./ListCad.css"
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/register"

export const ListCad = () => {
    const [register, setRegister] = useState([]);

    useEffect(() => {
        console.log("Carregou")
        async function getData() {
        const res = await fetch(url)
        const data = await res.json()
        setRegister(data)
        }
        getData();
    }, []);

    return (
        <div>
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
