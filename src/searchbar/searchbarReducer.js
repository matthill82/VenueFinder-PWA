import types from "../constants";

export const initialState = {
  position: {
    isGetting: false,
    coords: {
      latitude: null,
      longitude: null,
      accuracy: null
    }
  },
  fsqResponseData: {
    isGetting: false,
    venues: []
  },
  fsqRequestData: {
    query: ""
  }
};
// I'm not sure whether I should be hardcoding the key/values in reducers. I feel that they should be in the action that's dispatched
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_GETTING_POSITION:
      return {
        ...state,
        position: {
          isGetting: true,
          coords: { ...state.position.coords }
        }
      };

    case types.GET_POSITION_SUCCESS:
      return {
        ...state,
        position: {
          isGetting: false,
          coords: {
            latitude: action.position.coords.latitude,
            longitude: action.position.coords.longitude,
            accuracy: action.position.coords.accuracy
          }
        }
      };

    case types.GET_POSITION_FAILURE:
      return {
        ...state,
        position: {
          isGetting: false,
          ...state.position
        }
      };

    case types.IS_GETTING_VENUES:
      return {
        ...state,
        position: {
          ...state.position,
          ...state.coords
        },
        fsqResponseData: {
          isGetting: true,
          venues: [...state.fsqResponseData.venues]
        }
      };

    case types.GET_VENUES_SUCCESS:
      return {
        ...state,
        fsqResponseData: {
          isGetting: false,
          venues: action.venues
        }
      };

    case types.UPDATE_SEARCHBAR_QUERY:
      return {
        ...state,
        fsqRequestData: {
          query: action.query
        }
      };

    default:
      return state;
  }
};

export default reducer;
