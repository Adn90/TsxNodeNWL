import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../componentes/Input/input';
import PageHeader from '../../componentes/PageHeader';
import Textarea from '../../componentes/Textarea/textarea';
import Select from '../../componentes/Select/select';

import './styles_professorForm.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';



function ProfessorForm() {
    //estados no React: Para cada objeto deste array, será gerado scheduleItem do professor
    // nesse projeto, uma pessoa só pode ter 1 horário por dia
    // React não fica observando vars comuns, para isso, ele precisa do UseState **
    // Com o UseState, modificações em vars, feito o scheduleItems, vão ser refletidas no layout
    // UseState retorna 2 coisas, os dados a serem trabalhados e uma função, por isso é melhor utilizar desestruturação (ver tips da func)
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '',  to: '', } // scheduleItem*
    ]);

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const history = useHistory();
  
    function addNewScheduleItem() {
        //React rabalha com imutabilidade, então para modificar o scheduleItems, 1ª vc copia os dados e depois add os novos dados
        setScheduleItems([
            ...scheduleItems, // forma mais simples de copiar um array em JS
            { week_day: 0, from: '',  to: '', }
        ]);
        
        // dar um push não funciona pelo motivo do react não observar vars normais sem o useState **
        /* scheduleItems.push({
            week_day: 0,
            from: '',
            to: '',
        }); */
    }

    function setScheduleItemsValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => { // map pecorre o array e o retorna com as modificações com o mesmo tamanho
            if (index == position) {
                //setScheduleItemsValue(0, 'week_day', '2')
                // retorna todo o scheduleItem
                // [field] é uma forma de modificar um dos campos do objeto, vem em [] p/ não fazer com que field vire uma propriedade do objeto
                // week_day já existe no objeto, então ele será sobreescrito pelo [field]: value
                return { ...scheduleItem, [field]: value }; // retorna o scheduleItem* e modifica o param da função [field] com o value
            }

            return scheduleItem; 
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(evento: FormEvent) {
        evento.preventDefault(); // evita que a página seja recarregada após o envio do form

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/'); // forma de fazer route sem clicar em links
        }).catch((err) => {
            alert('Erro no cadastro');
            console.log(err);
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrivél que você quer dar aulas"
                description="O primeiro passa é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={ handleCreateClass }>
                    <fieldset>
                        <legend>Seus Dados</legend>

                        <Input 
                            name="name" 
                            label="Nome Completo" 
                            value={name} 
                            onChange={(evento) => { //sempre que o input mudar o valor
                                setName(evento.target.value) // valor digitado pelo usuário
                            }}
                        />

                        <Input 
                            name="avatar" 
                            label="Avatar"  
                            value={avatar}
                            onChange={(evento) => { setAvatar(evento.target.value) }} 
                        />

                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"  
                            value={whatsapp}
                            onChange={(evento) => { setWhatsapp(evento.target.value) }} 
                        />
                        
                        <Textarea 
                            name="bio" 
                            label="Biografia" 
                            value={bio}
                            onChange={(evento) => { setBio(evento.target.value) }} 
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="matéria"
                            value= {subject}
                            onChange= {(evento) => { setSubject(evento.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Matemática', label: 'Artes' },
                                { value: 'Matemágica', label: 'Matemágica' },
                                { value: 'Swp', label: 'Swp' },
                            ]}
                        />

                        <Input 
                            name="cost" 
                            label="Custo da sua hora por aula" 
                            value= {cost}
                            onChange= {(evento) => { setCost(evento.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                /* key é necessária para distinguir cada bloco de schedule-item */
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={ scheduleItem.week_day }
                                        onChange={evento => { setScheduleItemsValue(index, 'week_day', evento.target.value) }}
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
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={ scheduleItem.from }
                                        onChange={evento => { setScheduleItemsValue(index, 'from', evento.target.value) }} 
                                    />

                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={ scheduleItem.to }
                                        onChange={evento => { setScheduleItemsValue(index, 'to', evento.target.value) }} 
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default ProfessorForm;