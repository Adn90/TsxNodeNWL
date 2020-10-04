import React, { TextareaHTMLAttributes } from 'react';

import './textarea.css'

// o InputHTMLAttributes habilita o user a utilizar props html no componente 
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;

};

// C = func component
// ...rest - rest operator - todas as props que sobrarm tirando a label e name. Facilita para não ficar passando por parâmetro várias vars
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{ label }</label>
            <textarea id={name} {...rest}/>{/* esse rest pode ser várias coisas da tag, como number, required etc */}
        </div>
    );
}

export default Textarea;