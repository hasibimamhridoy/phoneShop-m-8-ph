import swal from "sweetalert";
let addedFavoritesArray = [];
export const saveLocalStorage = (phone) => {
   
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));

    if (!favoritesItem) {
        addedFavoritesArray.push(phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
        swal("Good job!", "Succesfully Added!", "success");
    } else {
        const isExist = favoritesItem.find((item) => item.id === phone.id);

        if (!isExist) {
            addedFavoritesArray.push(...favoritesItem, phone);
            localStorage.setItem("favorites", JSON.stringify(addedFavoritesArray));
            swal("Good job!", "Succesfully Added!", "success");
        } else {
            swal("Already Exist!", "No Duplicate!", "error");
        }
    }
}