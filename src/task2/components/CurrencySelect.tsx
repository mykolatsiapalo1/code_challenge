import React from 'react';
import { Select } from '../styles/StyledComponents';
import { UseFormRegister } from 'react-hook-form';

interface Option {
    value: string;
    label: string;
}

interface CurrencySelectProps {
    name: string;
    register: UseFormRegister<any>; // Adjust 'any' to the actual form values type
    options: Option[];
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ name, register, options }) => (
    <Select {...register(name)}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </Select>
);

export default CurrencySelect;
