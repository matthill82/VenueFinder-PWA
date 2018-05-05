/* eslint-disable */
import types from "../constants";
import suggestCompletion from "../services/fsqAPI";

export const isGettingCurrentPosition = {
  type: types.IS_GETTING_POSITION
};

export const currentPositionSuccess = position => {
  return {
    type: types.GET_POSITION_SUCCESS,
    position: position
  };
};

export const currentPositionFailure = {
  type: types.GET_POSITION_FAILURE
};

export function getPosition() {
  const options = {
    enableHighAccuracy: false,
    timeout: 250,
    maximumAge: 100000
  };
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(isGettingCurrentPosition);
      navigator.geolocation.getCurrentPosition(
        // success
        position => {
          dispatch(currentPositionSuccess(position));
          resolve();
        },
        error => {
          dispatch(currentPositionFailure);
          reject(error);
        }
      );
    });
  };
}

export const isGettingVenues = {
  type: types.IS_GETTING_VENUES
};

export const getVenuesSuccess = responseObject => {
  const venues = responseObject.response.minivenues.map(venue => {
    return {
      id: venue.id,
      name: venue.name,
      location: {
        address: venue.location.address,
        city: venue.location.city,
        distance: venue.location.distance
      }
    };
  });

  return {
    type: types.GET_VENUES_SUCCESS,
    venues: venues
  };
};

export const getVenuesFailure = {
  type: types.GET_VENUES_FAILURE
};

export const makeDateString = () => {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth();
  const yyyy = today.getFullYear();
  const prependZero = dateString => {
    if (dateString.length > 2) return new Error("Only two digit values");
    return dateString < 10 ? `0${dateString}` : dateString;
  };
  return `${yyyy}${prependZero(mm)}${prependZero(dd)}`;
};

export function getVenues() {
  return (dispatch, getState) => {
    dispatch(getPosition())
      .then(() => {
        dispatch(isGettingVenues);
        const position = getState().SearchBar.position;
        const query = getState().SearchBar.fsqRequestData.query;

        suggestCompletion({
          ll: `${position.coords.latitude}, ${position.coords.longitude}`,
          v: makeDateString(),
          query: `${query}`
        }).then(
          venues => {
            dispatch(getVenuesSuccess(venues));
          },
          () => {
            dispatch(getVenuesFailure);
          }
        );
      })
      .catch(error => {
        console.error("Cannot retrieve your position", error);
      });
  };
}

// export const getVenues = async () => {
//   const position = await dispatch(getPosition());
//   try {
//     dispatch(isGettingVenues);
//     const position = getState().SearchBar.position;
//     const query = getState().SearchBar.fsqRequestData.query;
//     const venues = suggestCompletion({
//       ll: `${position.coords.latitude}, ${position.coords.longitude}`,
//       v: makeDateString(),
//       query: `${query}`
//     });
//     dispatch(getVenuesSuccess(venues));
//   } catch (error) {
//     dispatch(getVenuesFailure);
//     console.error("Cannot retrieve venues");
//   }
// };

export const updateSearchbarQuery = searchTerm => {
  return {
    type: types.UPDATE_SEARCHBAR_QUERY,
    query: searchTerm
  };
};
