import React from "react";
import OpenRecall from "@/assets/OpenRecallsIcon.png";
import Image from "next/image";

const RecallsSection = () => {
  return (
    <div
      id="recall"
      className="w-full flex flex-col gap-8 bg-marian text-white p-8 rounded-xl"
    >
      <div className="flex items-center font-bold gap-4">
        <div className="h-fit p-2 rounded-xl bg-white">
          <Image
            src={OpenRecall}
            width={300}
            height={300}
            className="w-8"
            alt="Record Found Vhyex"
          />
        </div>
        <span>Open Recalls</span>
      </div>
      <div className="flex flex-col gap-4 font-light">
        <div className="text-sm flex flex-col">
          <span>Recall #: 19S29 | SEAT FRAME BURRED EDGE</span>
          <span>Recall Date: 2019 Sep 12</span>
        </div>
        <div className="text-sm flex flex-col">
          <span className="font-bold">Recall Description</span>
          <span>
            ON YOUR VEHICLE, THE INBOARD POWER SEAT TRACK MAY HAVE A SHARP BURR
            DUE TO AN IMPROPERLY FINISHED EDGE.
          </span>
        </div>
        <div className="text-sm flex flex-col">
          <span className="font-bold">Remedy</span>
          <span>
            FORD MOTOR COMPANY HAS AUTHORIZED YOUR DEALER TO INSTALL FLOCKED
            TAPE OVER SEAT TRACK EDGE FREE OF CHARGE (PARTS AND LABOR).
          </span>
        </div>
        <div className="text-sm flex flex-col">
          <span>
            This recall was open as of the date/time that this report was
            generated. For more information, or to find out if the recall has
            been closed, please contact FORD or visit Ford's website.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecallsSection;
