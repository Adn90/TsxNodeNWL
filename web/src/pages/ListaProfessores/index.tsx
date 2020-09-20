import React from 'react';

import PageHeader from '../../componentes/PageHeader';
import ProfessorItem from '../../componentes/ProfessorItem';

import './styles.css';

function listaProfessores() {
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Proffys disponíveis">
               <form id="search-teachers">
                   <div className="input-block">
                       <label htmlFor="subject">Matéria</label>
                       <input type="text" id="subject"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="week_day">Dia da Semana</label>
                       <input type="text" id="week_day"/>
                   </div>

                   <div className="input-block">
                       <label htmlFor="time">Hora</label>
                       <input type="text" id="time"/>
                   </div>
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