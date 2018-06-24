import React, { Component } from 'react';
import './styles.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.debounced = null;
    this.debounce = props.debounce || 500;
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  debounceInput = e => {
    e.persist();

    if (this.debounced) {
      clearTimeout(this.debounced);
    }

    this.debounced = setTimeout(e => {
      return this.props.onInput(e);
    }, this.debounce, e);
  };

  render() {
    const {errorMessage} = this.props;
    return (
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <input type="text"
          ref={input => this.searchInput = input}
          className="search-control"
          onInput={this.debounceInput}
          placeholder="Search Star Wars Planets"
        />
      </div>
    );
  }
}

export default SearchInput;
