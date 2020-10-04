import React from 'react';
import Input from '../../componentes/Input/input';
import Select from '../../componentes/Select/select';

import PageHeader from '../../componentes/PageHeader';
import ProfessorItem from '../../componentes/ProfessorItem';


import './styles.css';

function listaProfessores() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Artes' },
                            { value: 'Matemágica', label: 'Matemágica' },
                            { value: 'Swp', label: 'Swp' },
                        ]}
                    />

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