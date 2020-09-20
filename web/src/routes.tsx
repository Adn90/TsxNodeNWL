import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import listaProfessores from './pages/ListaProfessores';
import ProfessorForm from './pages/ProfessorForm';

//Config de rotas, caminho e depois componente
function Routes() {
    return (
        <BrowserRouter>
        {/* react vai mostar os componentes literalmente, como todos os endereções usam 'www.site.com/...', então landing vai ser sempre carregado */}
        {/*exact faz com que landing só seja carregado, caso apenas exista a 'www.site.com/' e não 'www.site.com/page2' */}
            <Route path="/" exact component={Landing} /> 
            <Route path="/estudar" component={listaProfessores} />
            <Route path="/aulas" component={ProfessorForm} />
        </BrowserRouter>
    );

}

export default Routes;