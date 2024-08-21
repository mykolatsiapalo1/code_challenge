import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    fromCurrency: yup.string().required('From currency is required'),
    toCurrency: yup.string().required('To currency is required'),
    amount: yup.number().positive('Amount must be positive').required('Amount is required')
});
