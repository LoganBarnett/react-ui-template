import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../services/pokedex';

export default function useSearchResults() {
    const [ searchResults, setSearchResults ] = useState([]);
    const [ error , setError ] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const usableSearchParams = Object.fromEntries(searchParams.entries());

    const nextPage = async () => {
        usableSearchParams.page = parseInt(usableSearchParams.page) + 1;
        setSearchParams(usableSearchParams);
        const moreResults = await search(usableSearchParams);
        setSearchResults(searchResults.concat(moreResults.results));
    }

    const searchPokedex = async (searchObj) => {
        if(searchObj.page == null) {
            searchObj.page = 1;
        }
        setSearchParams(searchObj);
        try {
            const body = await search(searchObj);
            setSearchResults(body.results);
        } catch (e) {
            setError("Error searching pokedex " + e.body.toString());
        }
    }
    useEffect(() => void searchPokedex(usableSearchParams), []);

    return {
        nextPage,
        searchParams,
        searchResults,
        setSearchResults,
        searchPokedex,
    }
}