import React from 'react'
import "./ListCad.css"

export const ListCad = () => {
    return (
        <div>
            <table id='table'>
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
                <tr>
                    <td>New Fiesta</td>
                    <td>AWT8A25</td>
                    <td>Ford</td>
                    <td>Branco</td>
                    <td>2014-2016</td>
                    <td>Luciano alves dos santos</td>
                    <td>Rua 4, 40, Bethania</td>
                    <td>27997434875</td>
                    <td>85687304805</td>
                </tr>
                <tr>
                    <td>Onix</td>
                    <td>OVE1G44</td>
                    <td>Chevrolet</td>
                    <td>Preto</td>
                    <td>2018-2018</td>
                    <td>Heitor da silva soares</td>
                    <td>Rua S, 80, Aeroporto</td>
                    <td>27997583590</td>
                    <td>01275906588</td>
                </tr>
            </table>
        </div>
    )
}
