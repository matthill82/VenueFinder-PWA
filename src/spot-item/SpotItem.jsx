import React from "react";
import PropTypes from "prop-types";

const SpotItem = props => (
  <li key={`item-${props.id}`} data-selector="spot-table__item" className="spot-table__item">
    <button className="spot-table__item-name">{props.name}</button>
    <button className="spot-table__item-distance">
      {(props.distance / 1000).toFixed(2)}km away
    </button>
  </li>
);

SpotItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired
};

export default SpotItem;
