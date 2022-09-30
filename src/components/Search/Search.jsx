import React from 'react';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchResults from '../../hooks/use-search-results.js';

export default function Search() {
    const { pokemon, setPokemon, searchParams, searchResults, searchPokedex } = useSearchResults();
    return <section>
      <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
      <SearchResults results={searchResults} />
    </section>
}