import React from 'react'
import './CadCarros.css'

export const CadCarros = () => {
    return (
        <div id='container'>
            <div className='container-cad'>
                <div id='car-register'>
                    <h3>Dados do Carros</h3>
                    <form id="cad-carros">
                        <div>
                            <label>
                                <span>Modelo:</span>
                                <input type="text" placeholder='Modelo do carro' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Placa do carro:</span>
                                <input type="text" placeholder='Digite a placa do carro' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Marca:</span>
                                <input type="text" placeholder='Digite a marca do carro' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Cor:</span>
                                <input type="text" placeholder='Digite a cor do carro' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Ano de Fabricação:</span>
                                <input type="text" placeholder='Digite o ano de fabricação do carro' />
                            </label>
                        </div>
                        
                    </form>
                </div>
                <div id='car-owner'>
                    <form>
                        <div>
                            <h3>Dados do proprietario</h3>
                        </div>
                        <div>
                            <label>
                                <span>Nome Completo:</span>
                                <input type="text" placeholder='Digite o nome completo' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Endereço Completo:</span>
                                <input type="text" placeholder='Digite o endereço completo' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Telefone:</span>
                                <input type="text" placeholder='Digite o telefone do proprietario' />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>CPF:</span>
                                <input type="text" placeholder='Digite o cpf do proprietario' />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
