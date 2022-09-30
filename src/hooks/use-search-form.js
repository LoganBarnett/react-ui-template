import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const usableSearchParams = Object.fromEntries(searchParams.entries());
    const [ pokemon, setPokemon ] = useState(usableSearchParams.pokemon || '');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ error , setError ] = useState('');

    const searchPokedex = async (searchObj) => {
        setSearchParams(searchObj);
        const query = Array.from(Object.entries(searchObj))
          .map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
        const res = await fetch(process.env.POKEDEX_URL + '?' + query);
        if (res.status >= 400) {
            setError("Error searching pokedex " + res.body.toString());
        } else {
            const body = await res.json()
            console.log('search results', body)
            setSearchResults(body.results);
        }
    }
    useEffect(() => void searchPokedex(usableSearchParams), []);

    return {
        pokemon,
        setPokemon,
        searchParams,
        searchResults,
        setSearchResults,
        error,
        setError,
        searchPokedex,
    }
}