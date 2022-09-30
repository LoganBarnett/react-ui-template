import React from 'react';
import SearchResultCard from './SearchResultCard.jsx';

export default function SearchResults({ results }) {
    return <ul>
        {results.map(result => {
            return <SearchResultCard key={result._id} pokemon={result} />
        })}
    </ul>
}