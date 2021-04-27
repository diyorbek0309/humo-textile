const initialState = {
  language: null,
  error: {},
};

function langReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log(payload);

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
