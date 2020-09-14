const getAsyncData = () => {
  return {
    type: "GET_ASYNC_DATA",
  };
};

const getAsyncData2 = () => {
  return {
    type: "GET_ASYNC_DATA2",
  };
};

export const asyncActions = {
  getAsyncData,
  getAsyncData2,
};
