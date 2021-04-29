const initialState = {
  language: "uz",
  error: {},
};

function langReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LANG_CHANGED":
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
}

export default langReducer;
