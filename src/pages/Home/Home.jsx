import React, { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";
import { useLoaderData } from "react-router-dom";
import useGetAllPhones from "../../hooks/useGetAllPhones";

const Home = () => {
  // const phones = useLoaderData();

  //useCustomHook
  const [phones, isLoading] = useGetAllPhones();
  console.log(phones);

  return (
    <div className="py-2">
      <Banner></Banner>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;
