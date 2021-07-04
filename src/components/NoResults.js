import React from 'react';
import NoSearchResults from "../images/no-search-results.jpg";

export default function NoResults() {
    return (
        <div className="no-results-found">
            <p>No results found</p>
            <img src={NoSearchResults} alt="no-results-found" />
        </div>
    )
}
