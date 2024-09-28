import axios from 'axios';
import { formatData } from '../utils/formatResponse';

export const fetchMemeCoins = async () => {
  try {
    const response = await axios.get("/api/v1/cryptocurrency/category", {
      params: {
        id: '6051a82566fc1b42617d6dc6',
        start: '1',
        limit: '100',
        convert: 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': import.meta.env.VITE_PUBLIC_COINMARKETCAP_API_KEY
      }
    });
    
    if (response.data && response.data.data && response.data.data.coins) {
      return formatData(response.data.data.coins);
    }
    return [];
  } catch (error) {
    console.error("Error fetching meme coin data:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    throw error;
  }
};