import React from "react";
import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className="py-4 text-center text-xl">Our Phones Collections</h1>

      <div className="grid grid-cols-4 gap-3">
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
