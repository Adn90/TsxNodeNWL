import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function ProfessorItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/42514384?s=400&v=4" alt="90" />
                <div>
                    <strong>90</strong>
                    <span>SPlay</span>
                </div>
            </header>
            <p>
                Caros amigos, a execução dos pontos do programa possibilita uma melhor visão global de todos os recursos funcionais envolvidos.
                   <br /><br />
                   Gostaria de enfatizar que a adoção de políticas descentralizadoras facilita a criação do retorno esperado a longo prazo.
                   </p>
            <footer>
                <p>
                    preço/hora
                           <strong>R$80</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="zapzap" />
                           entrar em contato
                       </button>
            </footer>
        </article>
    )
}

export default ProfessorItem;