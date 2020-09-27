import React, { InputHTMLAttributes } from 'react';

import './input.css'

// o InputHTMLAttributes habilita o user a utilizar props html no componente 
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;

};

// C = func component
// ...rest - rest operator - todas as props que sobrarm tirando a label e name. Facilita para não ficar passando por parâmetro várias vars
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{ label }</label>
            <input type="text" id={name} {...rest}/>{/* esse rest pode ser várias coisas da tag, como number, required etc */}
        </div>
    );
}

export default Input;