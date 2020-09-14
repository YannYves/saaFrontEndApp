import React from "react";
import { useDispatch } from "react-redux";
import { syncActions } from "../actions";
import { asyncActions } from "../actions";

const ActionComponent = () => {
  const dispatch = useDispatch();
  const pullAsyncDataFunc = () => {
    dispatch(asyncActions.getAsyncData());
  };

  const pullAsyncDataFunc2 = () => {
    dispatch(asyncActions.getAsyncData2());
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(syncActions.increment());
        }}
      >
        Increment
      </button>{" "}
      -{" "}
      <button
        onClick={() => {
          dispatch(syncActions.decrement());
        }}
      >
        Decrement
      </button>
      <div>
        <button onClick={pullAsyncDataFunc}>Pull Async Data</button>
        <button onClick={pullAsyncDataFunc2}>Pull Async Data 2</button>
      </div>
    </div>
  );
};
export default ActionComponent;
