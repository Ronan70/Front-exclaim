import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

export default function Index(){
    const [carro, setCarros] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('carros').then(response => {
            setCarros(response.data);
        })
    });

    return (
        <div className="profile-container">
            <header>
                     <h1>Listagem de carros</h1>
 
                 <Link className="button-listagem" to="/registro-carros">Cadastrar novo carro</Link>
                 <Link className="button-listagem" to="/">Cadastrar novo cliente</Link>
                 <Link className="button-listagem" to="/index-revisao">Ver todas as revisões</Link> 
            </header>
 
             <h1>Carros Cadastrados</h1>
 
             <ul>
 
                 {carro.map(carro => (
                     <li key={carro.id}>
                     <strong>nome do carro:</strong>
                     <p>{carro.nome_carro}</p>

                     <strong>Nome do Proprietario:</strong>
                     <p>{carro.nome}</p>
 
                     <strong>Placa:</strong>
                     <p>{carro.placa}</p>

                     <strong>Marca:</strong>
                     <p>{carro.marca}</p>

                     <strong>Ano de Fabricação:</strong>
                     <p>{carro.ano_fabricacao}</p>

                 </li>
                 ))}
 
             </ul>
 
        </div> 
     );

}