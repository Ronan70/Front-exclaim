import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

export default function Index(){
    const [revisao, setRevisao] = useState([]);

    useEffect(() => {
        api.get('revisoes').then(response => {
            setRevisao(response.data);
        })
    });

    return (
        <div className="profile-container">
            <header>
                     <h1>Listagem de carros</h1>
 
                 <Link className="button-listagem" to="/registro-carros">Cadastrar novo carro</Link>
                 <Link className="button-listagem" to="/">Cadastrar novo cliente</Link>
                 <Link className="button-listagem" to="/index">Ver todas os carros</Link> 
            </header>
 
             <h1>Carros Cadastrados</h1>
 
             <ul>
 
                 {revisao.map(revisao => (
                     <li key={revisao.id}>
                     <strong>nome do carro:</strong>
                     <p>{revisao.nome_carro}</p>

                     <strong>Nome do Proprietario:</strong>
                     <p>{revisao.nome}</p>
 
                     <strong>Placa:</strong>
                     <p>{revisao.placa}</p>

                     <strong>Data:</strong>
                     <p>{revisao.data}</p>

                     <strong>Preço da revisão:</strong>
                     <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(revisao.preco)}</p>

                 </li>
                 ))}
 
             </ul>
 
        </div> 
     );

}