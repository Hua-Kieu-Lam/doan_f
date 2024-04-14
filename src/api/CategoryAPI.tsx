import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCategory = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/category`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        return [];
    }
};