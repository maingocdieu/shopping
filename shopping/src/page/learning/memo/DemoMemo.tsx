import { useState } from "react";
import Content from "./Content";

export const DemoMemo = () => {
  const [count, setCount] = useState(0);
  const handelCrease = () => {
     setCount(count + 1);
    // function name() {
    //     setCount(count + 1);
    // }
    console.log(count);
    // name();
    // setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);
  };
  return (
    <>
      <Content />
      <h1>{count}</h1>
      <br />
      <button onClick={handelCrease}>Crease</button>
    </>
  );
};
