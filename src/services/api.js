import axios from 'axios';
import { useState, useEffect } from 'react';

const useApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try{
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setData(response.data);
            }catch (error){
                setError(error);
            }
            
            setLoading(false);
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useApi;
