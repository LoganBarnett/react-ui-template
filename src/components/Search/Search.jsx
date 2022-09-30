import React from 'react';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import useSearchForm from '../../hooks/use-search-form.js';

export default function Search() {
    const { pokemon, setPokemon, searchParams, searchResults, searchPokedex } = useSearchForm();
    return <section>
      <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
      <SearchResults results={searchResults} />
    </section>
}