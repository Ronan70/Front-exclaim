import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegistroClientes from './pages/CadastroClientes';
import RegistroCarros from './pages/CadastroCarro';
import RegistroRevisoes from './pages/CadastroRevisao';
import IndexCarros from './pages/IndexCarros';
import IndexRevisao from './pages/IndexRevisoes';

export default function Routes(){
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={RegistroClientes} />

                <Route path="/registro-carros" exact component={RegistroCarros} />

                <Route path="/registro-revisoes" exact component={RegistroRevisoes} />

                <Route path="/index" exact component={IndexCarros} />

                <Route path="/index-revisao" exact component={IndexRevisao} />
            </Switch>
        </BrowserRouter>
    )
}