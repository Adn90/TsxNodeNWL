import React from 'react';
import { Link } from 'react-router-dom'; //'Link' substitui a tag <a> e 'to' href, pois ela acaba recarregando a pág, violando o single page app


// agora logoImg é uma var js e para usar no html, só usar {}
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'
// componente react
function Landing() {
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
                    Total de 200 conexoões já realizadas <img src={purpleHeartIcon} alt="coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;