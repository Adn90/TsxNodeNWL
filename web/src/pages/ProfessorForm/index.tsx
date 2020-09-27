import React from 'react';
import Input from '../../componentes/Input/input';
import PageHeader from '../../componentes/PageHeader';

import './styles_professorForm.css';
import warningIcon from '../../assets/images/icons/warning.svg';

function ProfessorForm() {
    return(
        <div id="page-teacher-form" className="container">
           <PageHeader 
            title="Que incrivél que você quer dar aulas"
            description="O primeiro passa é preencher esse formulário de inscrição"
           />

           <main>
               <fieldset>
                   <legend>Seus Dados</legend>

                   <Input name="name" label="Nome Completo" />
                   <Input name="avatar" label="Avatar" />
                   <Input name="whatsapp" label="Whatsapp" />
                   
               </fieldset>

               <fieldset>
                   <legend>Sobre a aula</legend>

                   <Input name="subject" label="matéria" />
                   <Input name="cost" label="Custo da sua hora por aula" />                  
               </fieldset>

               <footer>
                   <p>
                       <img src={warningIcon} alt="Aviso importante"/>
                       Importante! <br />
                       Preencha todos os dados
                   </p>
                   <button type="button">
                        Salvar cadastro
                   </button>
               </footer>
           </main>
        </div>
    )
}

export default ProfessorForm;