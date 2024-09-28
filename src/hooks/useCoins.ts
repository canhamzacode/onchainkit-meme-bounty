import { useState, useEffect } from 'react';
import { Coin } from '../types/Coin';
import { fetchMemeCoins } from '../services/fetchMemeData';

export const useCoins = () => {
  const [memeCoins, setMemeCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchMemeCoins();
        setMemeCoins(data);
      } catch (error) {
        console.error("Failed to fetch meme coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { memeCoins, loading };
};