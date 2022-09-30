import React from 'react';
import SearchResultCard from './SearchResultCard.jsx';
import styles from './Search.css';

export default function SearchResults({ results, infiniteScrollRef }) {
    return <ul className={styles.SearchResults}>
        {results.map((result, i) => {
            const ref = i == results.length - 3 ? infiniteScrollRef : undefined;
            return <SearchResultCard
              key={result._id}
              pokemon={result}
              infiniteScrollRef={ref}
            />
        })}
    </ul>
}