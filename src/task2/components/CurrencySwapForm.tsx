import React, { useEffect, useState } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../utils/validationSchema';
import { fetchPrices } from '../utils/fetchPrises';
import CurrencySelect from './CurrencySelect';
import AmountInput from './AmountInput';
import ExchangeRate from './ExchangeRate';
import { FormContainer, Button } from '../styles/StyledComponents';

interface FormValues {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
}

const CurrencySwapForm: React.FC = () => {
    const [prices, setPrices] = useState<{ [key: string]: { price: number } }>({});
    const [rate, setRate] = useState<string | null>(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        const loadPrices = async () => {
            const data = await fetchPrices();
            setPrices(data);
        };

        loadPrices();
    }, []);

    const onSubmit = (data: FormValues) => {
        const fromPrice = prices[data.fromCurrency]?.price || 0;
        const toPrice = prices[data.toCurrency]?.price || 0;
        const calculatedRate = fromPrice && toPrice ? (fromPrice / toPrice).toFixed(2) : '0';
        setRate(calculatedRate);
    };

    const fromCurrency = watch('fromCurrency');
    const toCurrency = watch('toCurrency');

    const currencyOptions = Object.keys(prices).map(key => ({
        value: key,
        label: key
    }));

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CurrencySelect name="fromCurrency" register={register} options={currencyOptions} />
                <CurrencySelect name="toCurrency" register={register} options={currencyOptions} />
                <AmountInput name="amount" register={register} errors={errors as FieldErrors<FormValues>} />
                {rate && <ExchangeRate rate={rate} />}
                <Button type="submit">Swap</Button>
            </form>
        </FormContainer>
    );
};

export default CurrencySwapForm;
