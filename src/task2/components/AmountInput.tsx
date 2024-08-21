import React from 'react';
import { Input, Error } from '../styles/StyledComponents';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface AmountInputProps {
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
}

const AmountInput: React.FC<AmountInputProps> = ({ name, register, errors }) => {
    const errorMessage = errors[name]?.message;

    return (
        <>
            <Input
                type="number"
                {...register(name)}
                placeholder="Enter amount"
            />
            {typeof errorMessage === 'string' && <Error>{errorMessage}</Error>}
        </>
    );
};

export default AmountInput;
