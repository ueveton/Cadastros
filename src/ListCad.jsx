import React from 'react'
import "./ListCad.css"

export const ListCad = () => {
    return (
        <div>
            <table>
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
                <tr>
                    <td>Fiesta Rocan</td>
                    <td>UTF1518</td>
                    <td>Ford</td>
                    <td>Prata</td>
                    <td>2011-2012</td>
                    <td>Ueveton Soares Pereira</td>
                    <td>Rua S, 80, Aeroporto</td>
                    <td>27988357582</td>
                    <td>87435716802</td>
                </tr>
            </table>
        </div>
    )
}
