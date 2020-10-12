import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import Input from '../../componentes/Input/input';
import Select from '../../componentes/Select/select';
import PageHeader from '../../componentes/PageHeader';
import ProfessorItem, { Teacher } from '../../componentes/ProfessorItem';

import './styles.css';


function ListaProfessores() {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function seachTeachers(e: FormEvent) {
        e.preventDefault();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Proffys disponíveis">
                <form id="search-teachers" onSubmit={seachTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={evento => { setSubject(evento.target.value) }}
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
                        value={week_day}
                        onChange={(evento) => { setWeekDay(evento.target.value) }}
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


                    <Input 
                        name="time" 
                        label="Hora" 
                        type="time"
                        value={time}
                        onChange={(evento) => { setTime(evento.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <ProfessorItem key={teacher.id} teacher={teacher}/>;
                })}
            </main>
        </div>
    )
}

export default ListaProfessores;