import React from 'react';
import Input from '../../componentes/Input/input';

import PageHeader from '../../componentes/PageHeader';
import ProfessorItem from '../../componentes/ProfessorItem';

import './styles.css';

function listaProfessores() {
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Proffys disponíveis">
               <form id="search-teachers">
                   <Input name="subject" label="Matéria" />
                   <Input name="week_day" label="Dia da Semana" />
                   <Input name="time" label="Hora" type="time" />
               </form>
           </PageHeader>

           <main>
               <ProfessorItem />
               <ProfessorItem />
               <ProfessorItem />
           </main>
        </div>
    )
}

export default listaProfessores;