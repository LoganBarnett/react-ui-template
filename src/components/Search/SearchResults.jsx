import React from 'react';
import SearchResultCard from './SearchResultCard.jsx';
import styles from './Search.css';

export default function SearchResults({ results }) {
    return <ul className={styles.SearchResults}>
        {results.map(result => {
            return <SearchResultCard key={result._id} pokemon={result} />
        })}
    </ul>
}