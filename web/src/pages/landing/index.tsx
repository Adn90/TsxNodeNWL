import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //'Link' substitui a tag <a> e 'to' href, pois ela acaba recarregando a pág, violando o single page app


// agora logoImg é uma var js e para usar no html, só usar {}
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'
import api from '../../services/api';
// componente react
function Landing() {
    // 0 para inicializar por causa do tempo de requisição; Poderia ter uma tela de loading enquanto terminar o await
    const [totalConnections, setTotalConnections] = useState(0);

    // serve para lançar uma requisição, como mostar o nº de requisições ao entrar na landing page
    // [] array de dependências: é quando se quer disparar o 1ª param do useEffect. Quando um dado desse array é modificado, a função é disparada
    // [] pode ser usado para disparar a func apenas uma vez ao acessar a tela
    useEffect(() => {
        api.get('connections').then(response => {
            //console.log(response);
            const { total } = response.data // == const total = response.data.total
            setTotalConnections(total);
        })
    }, []); 
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudo" 
                    className="hero-image" 
                />

                <div className="buttons-container">
                    <Link to="/estudar" className="study">
                        <img src={studyIcon} alt="estudar" />
                        estudar
                    </Link>

                    <Link to="/aulas" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de { totalConnections } conexoões já realizadas <img src={purpleHeartIcon} alt="coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;