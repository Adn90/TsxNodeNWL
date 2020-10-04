import React from 'react';
import Input from '../../componentes/Input/input';
import PageHeader from '../../componentes/PageHeader';
import Textarea from '../../componentes/Textarea/textarea';
import Select from '../../componentes/Select/select';

import './styles_professorForm.css';
import warningIcon from '../../assets/images/icons/warning.svg';



function ProfessorForm() {
    const scheduleItens = [
        { week_day: 0, from: '8:00 AM', to: '4:00 PM' },
        { week_day: 0, from: '10:00 AM', to: '6:00 PM' },
    ];
    return (
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
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Artes' },
                            { value: 'Matemágica', label: 'Matemágica' },
                            { value: 'Swp', label: 'Swp' },
                        ]}
                    />

                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários Disponíveis
                        <button type="button">+ Novo Horário</button>
                    </legend>
                    <div className="schedule-item">
                        <Select
                            name="week_day"
                            label="Dia da Semana"
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda-Feira' },
                                { value: '2', label: 'Terça-Feira' },
                                { value: '3', label: 'Quarta-Feira' },
                                { value: '4', label: 'Quinta-Feira' },
                                { value: '5', label: 'Sexta-Feira' },
                                { value: '6', label: 'Sábado' },

                            ]}
                        />
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
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