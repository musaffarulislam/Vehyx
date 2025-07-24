import HistoryCardIcon1 from "@/assets/svg/HistoryCardIcon1";
import Image from "next/image";
import { ReactNode } from "react";
import CarImage from "@/assets/CarModel.png";

interface HistoryCardComponentProps {
  icon?: ReactNode;
  status?: string;
  carModel?: string;
  historyValue?: string;
  color?: string;
}

const HistoryCardComponent: React.FC<HistoryCardComponentProps> = ({
  icon = <HistoryCardIcon1 />,
  status = "No Accidents",
  carModel = "2012 Toyota Camry SE",
  historyValue = "2,40,583 Rs.",
  color = "bg-blue-100",
}) => {
  return (
    <div
      className={`p-6 ${color} rounded-2xl shadow-md text-center relative w-2/3 lg:w-1/3`}
    >
      {/* Top Icon */}
      <div className="absolute p-6 -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full drop-shadow-default flex items-center justify-center w-24 h-24">
        {icon}
      </div>

      {/* Card Content */}
      <div className="mt-16">
        <h3 className="text-lg font-bold">{status}</h3>
        <p className="text-gray-600">{carModel}</p>

        {/* Fixed Car Image */}
        <div className="my-4">
          <Image
            src={CarImage}
            alt="Car"
            width={200}
            height={120}
            className="w-full scale-x-[-1]"
          />
        </div>

        <p className="text-gray-500 text-sm">VEHYX History based value</p>
        <p className="text-xl font-bold">{historyValue}</p>
      </div>
    </div>
  );
};

export default HistoryCardComponent;
