const customAsyncData = (state = "", action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

const customAsyncData2 = (state = "", action) => {
  switch (action.type) {
    case "SET_DATA2":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export { customAsyncData, customAsyncData2 };
