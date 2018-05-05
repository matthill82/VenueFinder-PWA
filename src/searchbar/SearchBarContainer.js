import { connect } from "react-redux";
import {
  getPosition,
  getVenues,
  updateSearchbarQuery
} from "./SearchBarActionCreators";
import SearchBar from "./SearchBar";

const mapStateToProps = state => state.SearchBar;

const mapDispatchToProps = dispatch => ({
  getPosition: () => {
    dispatch(getPosition());
  },

  getVenues: params => {
    dispatch(getVenues(params));
  },

  updateSearchbarQuery: params => {
    dispatch(updateSearchbarQuery(params));
  }
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchContainer;
