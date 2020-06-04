import React, { useState } from  'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Register() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');

    async function handleRegisterClient(e){
        e.preventDefault();
        
        if(cpf.length != 11){
            return alert('Cpf Invalido')
        }

        const data = {
            nome, 
            cpf,
            email,
            numero,
            sexo,
            idade,
        };

        try {
            const response = await api.post('/cadatro_cliente', data);
            
            alert('cadastrado com sucesso');
            alert(response);
        } catch(error){
            alert("Erro ao registrar, tente novamente")
        }
    }



    return (
        <div className="register-container">

            <div className="content">

                <section>
                    <h1>Cadastro de Clientes</h1>
                    <p>Faça o Cadastro de seus clientes aqui</p>

                    <p><Link className="back-link" to="/registro-carros">
                        Cadastrar um carro
                    </Link>
                    </p>

                    <p><Link className="back-link" to="/registro-revisoes">
                        Marcar uma revisão
                    </Link>
                    </p>

                    <p><Link className="back-link" to="/">
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
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                    />
                    <input 
                        type="number"
                        placeholder="Cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)} 
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="number"
                        placeholder="Numero"
                        value={numero}
                        onChange={e => setNumero(e.target.value)} 
                    />
                    <input 
                        placeholder="Sexo"
                        value={sexo}
                        onChange={e => setSexo(e.target.value)} 
                    />
                    <input 
                        type="number"
                        placeholder="Idade"
                        value={idade}
                        onChange={e => setIdade(e.target.value)} 
                    />


                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>

        </div>
    );
}