import React from "react";
import DetailsLeftComponent from "./DetailsLeftComponent";
import DetailsRightComponent from "./DetailsRightComponent";

const Details = () => {
  return (
    <div className="w-full flex max-lg:flex-col gap-4 md:gap-8">
      <DetailsLeftComponent />
      <DetailsRightComponent />
    </div>
  );
};

export default Details;
