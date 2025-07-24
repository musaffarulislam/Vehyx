import BasicInformations from "@/components/detailsPage/BasicInformations/BasicInformations";
import Details from "@/components/detailsPage/Details/Details";
import ImageGridSection from "@/components/detailsPage/ImageGridSection";
import PriceAnalysis from "@/components/detailsPage/PriceAnalysis/PriceAnalysis";
import RecommendedCars from "@/components/detailsPage/PriceAnalysis/RecommendedCars";
import FooterComponent from "@/components/footer/FooterCompoenent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full flex justify-center bg-gradient-mixture">
        <div className="w-full max-w-screen-2xl py-4 px-8">
          <NavbarComponent />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-screen-2xl flex flex-col gap-8 py-4 px-8">
          <ImageGridSection />
          <BasicInformations />
          <Details />
          <PriceAnalysis />
          <RecommendedCars />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default page;
