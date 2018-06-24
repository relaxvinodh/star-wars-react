import React from 'react';
import './styles.css';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import logoutImg from '../../logout.png'

export default ({
  results,
  placeholder,
  debounce,
  onInput,
  onClick,
  authenticate,
  logout,
  errorMessage
}) =>
  <div className="search-container">
    <div className="logoutSection">
      {authenticate.user && <p>Welcome {authenticate.user[0].name}! <img src={logoutImg} title="Logout" alt="title" className="logoutBtn" onClick={logout}/></p>}
    </div>
    <SearchInput
      placeholder={placeholder}
      debounce={debounce}
      onInput={onInput}
      errorMessage={errorMessage}
    />
    <SearchResults
      results={results}
      onClick={onClick}
    />
  </div>
