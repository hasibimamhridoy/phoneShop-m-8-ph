import React, { useEffect, useState } from "react";
import PhoneBanner from "./PhoneBanner";
import { useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const { id } = useParams();

  console.log(id);

  const [phone, setPhone] = useState({});

  useEffect(() => {
    fetch("/phones.json")
      .then((res) => res.json())
      .then((data) => {
        const findSinglePhone = data.find(
          (singlePhone) => singlePhone.id === id
        );
        setPhone(findSinglePhone);
      });
  }, [id]);

  return (
    <div>
      <PhoneBanner></PhoneBanner>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
