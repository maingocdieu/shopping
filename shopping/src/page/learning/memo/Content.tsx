import { memo } from "react";

 const Content = () => {
  console.log("rerender");
  return (
    <>
      <h1>Content</h1>
    </>
  );
};


export default memo(Content);