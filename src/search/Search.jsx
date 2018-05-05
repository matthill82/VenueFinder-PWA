import React from "react";
import SearchBarContainer from "../searchbar/SearchBarContainer";
import SpotListContainer from "../spot-list/SpotListContainer";
import "./index.css";

const Search = () => (
  <div className="search__container">
    <header className="search__header">
      <h1>Search</h1>
      <SearchBarContainer />
    </header>
    <section>
      <SpotListContainer />
    </section>
    <footer className="search__footer">Footer</footer>
  </div>
);
export default Search;
