const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
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

export default { increment, decrement, getAsyncData, getAsyncData2 };
