import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';


// forma de passar databind no react
interface PageHeaderProps {
    title: string;
    description?: string;
}

// React.FC function component <Generic em typescript>
// React.FC<PageHeaderProps> seriam basicamente os databinds na classe ts do angular
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
            <header className="page-header">

                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="voltar"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong> {props.title} </strong>
                    {/*  &&  = truthy. A condição vai ser executada se a 1ª parte for verdadeira */}
                    {/* truthy != null, 0, undifened , "" */}
                    { props.description && <p>{ props.description }</p> }

                    {props.children}
                </div>
                
            </header>
    )
}

export default PageHeader;