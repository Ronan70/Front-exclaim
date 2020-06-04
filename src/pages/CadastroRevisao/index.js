import React, { useState } from  'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Register() {

    const [preco, setPreco] = useState('');
    const [data, setData] = useState('');
    const [cpf, setCpf] = useState('');
    const [placa, setPlaca] = useState('');

    async function handleRegisterClient(e){
        e.preventDefault();

        const data = {
            preco,
            data,
            cpf,
            placa,
        };

        try {
            const response = await api.post('/cadastro_revisao', data);
            
            alert('Revisao marcada com sucesso');
        } catch(error){
            alert({error})
            alert("Erro ao registrar, tente novamente")
        }
    }



    return (
        <div className="register-container">

            <div className="content">

                <section>
                    <h1>Cadastro de Revisões</h1>
                    <p>Faça o Cadastro das revisões aqui</p>

                    <p><Link className="back-link" to="/">
                        Cadastrar um cliente
                    </Link>
                    </p>

                    <p><Link className="back-link" to="/registro-carros">
                        Cadastrar um carro
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
                        type="number"
                        placeholder="Preço da Revisão"
                        value={preco}
                        onChange={e => setPreco(e.target.value)} 
                    />
                    <input 
                        type="date"
                        placeholder="Data em que sera realizada a revisão"
                        value={data}
                        onChange={e => setData(e.target.value)} 
                    />
                    <input 
                        type="number"
                        placeholder="Cpf do proprietario"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)} 
                    />
                    <input 
                        placeholder="Placa do veiculo"
                        value={placa}
                        onChange={e => setPlaca(e.target.value)} 
                    />
                    
                    <button className="button" type="submit">Marcar</button>
                </form>

            </div>

        </div>
    );
}