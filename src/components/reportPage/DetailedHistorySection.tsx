import React from "react";
import DetailedHistoryIcon from "@/assets/DetailedHistoryIcon.png";
import Image from "next/image";

const DetailedHistorySection = () => {
  return (
    <div
      id="service-record"
      className="w-full flex flex-col gap-8 bg-white p-8 rounded-xl shadow-sm"
    >
      <div className="flex items-center font-bold gap-4">
        <div className="h-fit p-4 rounded-xl bg-platinum">
          <Image
            src={DetailedHistoryIcon}
            width={300}
            height={300}
            className="w-8"
            alt="Record Found Vhyex"
          />
        </div>
        <span>Detailed History</span>
      </div>
      <table className="w-full rounded-xl overflow-hidden border border-platinum">
        <thead>
          <tr className="text-white  bg-marian">
            <th className="w-1/5 p-4 text-left border-r border-platinum">
              Incident Date
            </th>
            <th className="w-1/5 p-4 text-left border-r border-platinum">
              Odometer
            </th>
            <th className="w-1/5 p-4 text-left border-r border-platinum">
              Source
            </th>
            <th className="w-1/5 p-4 text-left border-r border-platinum">
              Record Type
            </th>
            <th className="w-1/5 p-4 text-left">Details</th>
          </tr>
        </thead>
        <tbody className="border border-platinum">
          <tr className="border-b border-platinum text-sm">
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              6,995 KM
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8">
              <div className="flex flex-col">
                <span>Service Facility</span>
                <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 py-8 font-bold">6,995 KM</td>
          </tr>
          <tr className="border-b border-platinum text-sm">
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              6,995 KM
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8">
              <div className="flex flex-col">
                <span>Service Facility</span>
                <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 py-8 font-bold">6,995 KM</td>
          </tr>
          <tr className="border-b border-platinum text-sm">
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              6,995 KM
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8">
              <div className="flex flex-col">
                <span>Service Facility</span>
                <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 py-8 font-bold">6,995 KM</td>
          </tr>
          <tr className="border-b border-platinum text-sm">
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              6,995 KM
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8">
              <div className="flex flex-col">
                <span>Service Facility</span>
                <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 py-8 font-bold">6,995 KM</td>
          </tr>
          <tr className="border-b border-platinum text-sm">
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              6,995 KM
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8">
              <div className="flex flex-col">
                <span>Service Facility</span>
                <span>Pickering, Ontario, India</span>
              </div>
            </td>
            <td className="w-1/5 p-4 border-r border-platinum py-8 font-bold">
              2017 Apr 24
            </td>
            <td className="w-1/5 p-4 py-8 font-bold">6,995 KM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailedHistorySection;
