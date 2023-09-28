// apiService.tsx
import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '07c076663fd94e6e9d81506a362d654a'
    }
});

export const ApiService = {
    get: async (endpoint: string, params = {}) => {
        try {
            const response = await instance.get(`${endpoint}`, {
                params
            });

            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },
};
