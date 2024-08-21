import axios from 'axios';

interface Price {
    [key: string]: {
        price: number;
    };
}

export const fetchPrices = async (): Promise<Price> => {
    try {
        const response = await axios.get<Price>('https://interview.switcheo.com/prices.json');
        return response.data;
    } catch (error) {
        console.error('Error fetching prices:', error);
        return {};
    }
};
