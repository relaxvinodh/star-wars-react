import React from 'react';
import './styles.css';

export default ({ results, onClick }) =>{
  return <section className="results-section">
    <ul>
      {results.helpText && <span>{results.helpText}</span>}
      {results.planets && results.planets.map(res => {
        return <li key={res.name} onClick={() => onClick(res.url)}>{res.name}</li>
      })}
    </ul>
  </section>
}
