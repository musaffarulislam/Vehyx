import FilterList from "@/components/filter/FilterList";
import FooterComponent from "@/components/footer/FooterCompoenent";
import ListingCardsComponents from "@/components/listsPage/ListingCardsComponents";
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
      <div className="w-full flex max-w-screen-2xl py-4 px-8 mx-auto">
        <FilterList />
        <ListingCardsComponents />
      </div>
      <div className="w-full flex justify-center gap-4">
        <div className="w-8 h-8 flex justify-center items-center rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer">
          1
        </div>
        <div className="w-8 h-8 flex justify-center items-center rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer">
          2
        </div>
        <div className="w-8 h-8 flex justify-center items-center rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer">
          3
        </div>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <div className="px-4 h-8 flex justify-center items-center rounded-lg border border-black hover:bg-black hover:text-white cursor-pointer">
          Next
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default page;
