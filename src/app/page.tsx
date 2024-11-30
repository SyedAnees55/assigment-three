import React from "react";
import Parentcomponent from "./parentcomponent";
import State from "./state";
const page = () => {
  return (
    <div>
      <State />
      <Parentcomponent />
    </div>
  );
};

export default page;
