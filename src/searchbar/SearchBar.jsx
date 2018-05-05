import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const SearchBar = ({ updateSearchbarQuery, getVenues }) => {
  const debounceUpdateSearchbarQuery = _.debounce(updateSearchbarQuery, 250);

  return (
    <div className="search-bar">
      <TextField
        id="search"
        label="Search field"
        data-selector="search-bar__input"
        type="search"
        className="search-bar__input"
        placeholder="Search spots..."
        margin="normal"
        onChange={event => debounceUpdateSearchbarQuery(event.target.value)}
      />
      <Button
        data-selector="search-bar__button"
        className="search-bar__button"
        variant="raised"
        onClick={getVenues}
      >
        Search near me
      </Button>
    </div>
  );
};

SearchBar.propTypes = {
  getVenues: PropTypes.func.isRequired,
  updateSearchbarQuery: PropTypes.func.isRequired
};

export default SearchBar;
