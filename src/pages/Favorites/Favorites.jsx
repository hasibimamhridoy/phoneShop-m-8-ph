import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import FavoritesCard from "./FavoritesCard";
import swal from "sweetalert";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));

    if (favoritesItem) {
      setFavorites(favoritesItem);
      const total = favoritesItem.reduce(
        (prePrice, currentItem) => prePrice + currentItem.price,
        0
      );
      setTotalPrice(total);
    } else {
      console.log("No items found");
      setNofound("No items found");
    }
  }, []);

  const handleDeletedFavorites = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No items found");
    swal("Good job!", "Succesfully Deleted!", "success");
  };

  console.log(totalPrice);
  return (
    <div className="p-5">
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-xl">
          {noFound}
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div className="flex flex-col ga[-5] justify-center items-center">
              <button
                onClick={handleDeletedFavorites}
                className="px-5 rounded-md bg-green-400 my-5 "
              >
                Delete All Favorties
              </button>

              <p className="text-lg">Total Favorites Items Price :  <span className="text-xl font-bold">{totalPrice}</span></p>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? favorites?.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : favorites
                  .slice(0, 4)
                  ?.map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))}
          </div>

          {favorites.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 rounded-md bg-green-400  text-center block mx-auto my-5 "
            >
              {isShow ? "See Less" : "Show All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
