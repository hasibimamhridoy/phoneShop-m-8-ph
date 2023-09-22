import React, { useEffect, useState } from "react";
import PhoneBanner from "./PhoneBanner";
import { useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";
import GetAllPhones from "../../hooks/useGetAllPhones";
import useGetAllPhones from "../../hooks/useGetAllPhones";

const Phone = () => {
  const { id } = useParams();

  console.log(id);

  //useCustomHook
  const [phones, isLoading] = useGetAllPhones();

  const [phone, setPhone] = useState({});

  // useEffect(() => {
  //   fetch("/phones.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const findSinglePhone = data.find(
  //         (singlePhone) => singlePhone.id === id
  //       );
  //       setPhone(findSinglePhone);
  //     });
  // }, [id]);

  useEffect(() => {
    if (phones) {
      const findSinglePhone = phones?.find((singlePhone) => singlePhone.id === id);
    setPhone(findSinglePhone);
    }
  }, [id, phones]);

  return (
    <div>
      <PhoneBanner></PhoneBanner>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
