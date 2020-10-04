import React, { SelectHTMLAttributes } from 'react';

import './select.css'

// o SelectHTMLAttributes habilita o user a utilizar props html no componente 
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    // Array de objetos com campos value e string
    options: Array<{
        value: string;
        label: string;
    }>;
};

// C = func component
// ...rest - rest operator - todas as props que sobrarm tirando a label e name. Facilita para não ficar passando por parâmetro várias vars
const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{ label }</label>
            <select id={name} {...rest}> {/* esse rest pode ser várias coisas da tag, como number, required etc */}
            <option value="" disabled selected hidden>Selecione uma Opção</option>
                {options.map(option => {
                    // key é necessária para distinguir cada option
                    return <option key={option.value} value={option.value}>{ option.label }</option>
                })}
            </select>
        </div>
    );
}

export default Select;