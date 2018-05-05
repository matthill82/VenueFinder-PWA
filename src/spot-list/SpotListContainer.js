import { connect } from "react-redux";
import SpotList from "./SpotList";

const mapStateToProps = state => ({
  venues: state.SearchBar.fsqResponseData.venues
});

const SpotListContainer = connect(mapStateToProps)(SpotList);

export default SpotListContainer;
