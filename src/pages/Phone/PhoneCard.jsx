import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { saveLocalStorage } from "../../utils/localStorage";

const PhoneCard = ({ phone }) => {
  const { id, phone_name, image, rating, price, category, brand_name } =
    phone || {};

  const handleAddToFavorites = () => {
    let addedFavoritesArray = [];

    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));

    if (!favoritesItem) {
      addedFavoritesArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
      swal("Good job!", "Succesfully Added!", "success");
    } else {
      const isExist = favoritesItem.find((item) => item.id === id);

      if (!isExist) {
        addedFavoritesArray.push(...favoritesItem, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Good job!", "Succesfully Added!", "success");
      } else {
        swal("Already Exist!", "No Duplicate!", "error");
      }
    }

    console.log(addedFavoritesArray);

  };

  return (
    <div className="m-5 flex justify-center items-center">
      <div className="relative flex w-full max-w-[48rem] p-10 justify-center items-center flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>

          <div className="flex">
            <button
              onClick={handleAddToFavorites}
              className="flex select-none bg-green-200 items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to favorites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
