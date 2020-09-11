import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../actions/allActions";

const ActionComponent = () => {
  const dispatch = useDispatch();
  const pullAsyncDataFunc = () => {
    //
    dispatch(allActions.getAsyncData());
  };

  const pullAsyncDataFunc2 = () => {
    //
    dispatch(allActions.getAsyncData2());
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(allActions.increment());
          //
        }}
      >
        Increment
      </button>{" "}
      -{" "}
      <button
        onClick={() => {
          dispatch(allActions.decrement());

          //
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
