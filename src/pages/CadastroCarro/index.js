import React, { useState } from  'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Register() {

    const [nome_carro, setNome_carro] = useState('');
    const [marca, setMarca] = useState('');
    const [ano_fabricacao, setAno_fabricacao] = useState('');
    const [placa, setPlaca] = useState('');
    const [cpf, setCpf] = useState('');

    async function handleRegisterClient(e){
        e.preventDefault();

        const data = {
            nome_carro, 
            marca,
            ano_fabricacao,
            placa,
            cpf,
        };

        try {
            const response = await api.post('/cadastro-carros', data);
            
            alert('Carro cadastrado com sucesso');
        } catch(error){
            alert({error})
            alert("Erro ao registrar, tente novamente")
        }
    }



    return (
        <div className="register-container">

            <div className="content">

                <section>
                    <h1>Cadastro de carros</h1>
                    <p>Faça o Cadastro dos carros de seus clientes aqui</p>

                    <p><Link className="back-link" to="/">
                        Cadastrar um cliente
                    </Link>
                    </p>

                    <p><Link className="back-link" to="/registro-revisoes">
                        Marcar uma revisão
                    </Link>
                    </p>

                    <p><Link className="back-link" to="/index">
                        Vizualizar todos os carros
                    </Link>
                    </p>
                    <p><Link className="back-link" to="/index-revisao">
                        Vizualizar todas as revisões
                    </Link>
                    </p>
                </section>

                <form onSubmit={handleRegisterClient}> 
                    <input 
                        placeholder="Nome"
                        value={nome_carro}
                        onChange={e => setNome_carro(e.target.value)} 
                    />
                    <input 
                        placeholder="Marca"
                        value={marca}
                        onChange={e => setMarca(e.target.value)} 
                    />
                    <input 
                        type="number"
                        placeholder="Ano de Fabricação"
                        value={ano_fabricacao}
                        onChange={e => setAno_fabricacao(e.target.value)} 
                    />
                    <input 
                        placeholder="Placa do Veiculo"
                        value={placa}
                        onChange={e => setPlaca(e.target.value)} 
                    />
                    <input 
                        placeholder="Cpf do proprietario"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)} 
                    />


                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>

        </div>
    );
}