import React from "react";
import PropTypes from "prop-types";
import SpotItem from "../spot-item/SpotItem";

const SpotList = ({ venues }) => (
  <div className="spot-table">
    <ul className="spot-table__list">
      {venues.map(venue => (
        <SpotItem
          name={venue.name}
          id={venue.id}
          address={venue.location.address}
          distance={venue.location.distance}
        />
      ))}
    </ul>
  </div>
);

SpotList.propTypes = {
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired
      })
    })
  )
};
export default SpotList;
