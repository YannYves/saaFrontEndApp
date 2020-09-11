import React from "react";
import { useSelector } from "react-redux";

const OutputComponent = () => {
  const counter = useSelector((state) => state.counter.count);
  console.log("OutputComponent -> counter", counter);

  const customAsyncData = useSelector((state) => state.customAsyncData.payload);
  const customAsyncData2 = useSelector(
    (state) => state.customAsyncData2.payload
  );

  console.log("ici", customAsyncData2);

  const { author, date, title } =
    customAsyncData &&
    customAsyncData.slideshow &&
    customAsyncData.slideshow.author
      ? customAsyncData.slideshow
      : { author: "", date: "", title: "" };

  const { uuid } =
    customAsyncData2 && customAsyncData2.uuid ? customAsyncData2 : { uuid: "" };

  console.log("la", uuid);

  return (
    <div>
      <div>
        <p>
          {author}
          <br />
          {title}
          <br />
          {date}
          <br />
        </p>
      </div>
      <br />
      {counter}
      <br />
      <div>
        <p>{uuid}</p>
      </div>
    </div>
  );
};
export default OutputComponent;
