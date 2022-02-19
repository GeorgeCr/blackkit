const { combineReducers } = require("redux");

const initialState = { test: true, idk: false };

const rootReducer = combineReducers({
  root: (state = initialState, { type }) => {
    if (type === "TOGGLED") {
      return {
        ...state,
        test: !state.test,
        idk: !state.idk,
      };
    }
    return { ...initialState };
  },
});

export default rootReducer;
