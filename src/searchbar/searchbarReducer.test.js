/* global describe, expect, it */
import types from "../constants";
import { reducer, initialState } from "./searchbarReducer";
import { venues } from "../helpers/venues";

describe("Reducers", () => {
  it("Should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Is getting current position", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.IS_GETTING_POSITION
      };
      const expectedState = {
        ...initialState,
        position: {
          ...initialState.position,
          coords: {
            ...initialState.position.coords
          },
          isGetting: true
        }
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe("Successfully gets position from navigator", () => {
    it("should return the correct state", () => {
      const position = {
        coords: {
          latitude: 50,
          longitude: 0,
          accuracy: 5
        }
      };

      const action = {
        type: types.GET_POSITION_SUCCESS,
        position
      };

      const startingState = {
        ...initialState,
        position: {
          isGetting: true,
          ...initialState.position
        }
      };

      const expectedState = {
        ...startingState,
        position: {
          isGetting: false,
          coords: {
            ...position.coords
          }
        }
      };

      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("Fails to get position from navigator", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.GET_POSITION_FAILURE
      };

      const startingState = {
        ...initialState
      };

      const expectedState = {
        ...startingState,
        position: {
          isGetting: false,
          ...startingState.position
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("On getting venues from fsq", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.IS_GETTING_VENUES
      };

      const startingState = {
        ...initialState,
        position: {
          isGetting: false,
          ...initialState.position
        }
      };

      const expectedState = {
        ...startingState,
        fsqResponseData: {
          ...startingState.fsqResponseData,
          isGetting: true
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("Successfully gets venues from foursquare", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.GET_VENUES_SUCCESS,
        venues
      };
      const startingState = {
        ...initialState,
        fsqResponseData: {
          isGetting: true
        }
      };
      const expectedState = {
        ...startingState,
        fsqResponseData: {
          isGetting: false,
          venues
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });

  describe("User enters a search term", () => {
    it("should return the correct state", () => {
      const query = "cof";
      const action = {
        type: types.UPDATE_SEARCHBAR_QUERY,
        query
      };
      const startingState = {
        ...initialState
      };
      const expectedState = {
        ...startingState,
        fsqRequestData: {
          query
        }
      };
      expect(reducer(startingState, action)).toEqual(expectedState);
    });
  });
});
