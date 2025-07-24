"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import UsedCarFormComponent from "./UsedCarFormComponent";
import CarWorthFormComponent from "./CarWorthFormComponent";
import CarHistoryFormComponent from "./CarHistoryFormComponent";

enum EFormButton {
  CAR_WORTH,
  USED_CAR,
  CAR_HISTORY,
}
const DetailsFormComponent = () => {
  const [selectButton, setSelectButton] = useState<EFormButton>(
    EFormButton.CAR_WORTH
  );
  return (
    <div className="mx-12 lg:mx-24 py-8">
      <div className="p-12 md:p-16 lg:p-24 bg-white rounded-2xl shadow-md w-full flex justify-center items-center">
        <div className="w-full lg:w-3/4 h-full flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-center pb-4">
            The Vehyx-Marketplace <br />
            Buy and Sell Cars with Confidence
          </h1>
          <div className="flex flex-wrap gap-4 lg:gap-8 justify-center py-4">
            <div
              className={cn(
                "border rounded-full p-4 px-6 text-xl hover:bg-black hover:text-white transition cursor-pointer",
                selectButton === EFormButton.CAR_WORTH && "bg-black text-white"
              )}
              onClick={() => setSelectButton(EFormButton.CAR_WORTH)}
            >
              Car worth
            </div>
            <div
              className={cn(
                "border rounded-full p-4 px-6 text-xl hover:bg-black hover:text-white transition cursor-pointer",
                selectButton === EFormButton.USED_CAR && "bg-black text-white"
              )}
              onClick={() => setSelectButton(EFormButton.USED_CAR)}
            >
              Userd car
            </div>
            <div
              className={cn(
                "border rounded-full p-4 px-6 text-xl hover:bg-black hover:text-white transition cursor-pointer",
                selectButton === EFormButton.CAR_HISTORY &&
                  "bg-black text-white"
              )}
              onClick={() => setSelectButton(EFormButton.CAR_HISTORY)}
            >
              Car history
            </div>
          </div>
          {selectButton === EFormButton.CAR_WORTH && <CarWorthFormComponent />}
          {selectButton === EFormButton.USED_CAR && <UsedCarFormComponent />}
          {selectButton === EFormButton.CAR_HISTORY && (
            <CarHistoryFormComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsFormComponent;
