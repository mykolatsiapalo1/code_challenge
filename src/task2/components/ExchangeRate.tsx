import React from 'react';

interface ExchangeRateProps {
    rate: string;
}

const ExchangeRate: React.FC<ExchangeRateProps> = ({ rate }) => (
    <p>Exchange Rate: {rate}</p>
);

export default ExchangeRate;
