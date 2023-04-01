import header from "../components/header.js";
import { handelNav } from "../functions/nav.js";
import { Card } from "../functions/functions.js";
import { handelArticlesUi } from "../functions/functions.js";
import { checkIsItemInFav } from "../functions/addToFav.js";

document.querySelector("header").innerHTML = header;



handelNav()


//handel main section

let cardSections = document.querySelector(".cards");

let FvasData = JSON.parse(window.localStorage.getItem("favs")) || [];

function addItemToFavs(item) {
    FvasData.push(item)
    window.localStorage.setItem("favs", JSON.stringify(FvasData))
}

function removeItemFromTfavs(id) {
    FvasData = FvasData.filter(ele => ele.id != id);
    window.localStorage.setItem("favs", JSON.stringify(FvasData))


}



document.documentElement.addEventListener("click", function (e) {
    if (e.target.classList.contains("love-icon")) {
        if (checkIsItemInFav(e.target.parentNode, FvasData) == "found") {


            removeItemFromTfavs(e.target.parentNode.id);
            e.target.src = "../images/empty-heart.png";
            handelArticlesUi(FvasData, cardSections);
        } else {
            let element = e.target.parentNode;
            let parentElement = e.target.parentNode;
            // let title = element.querySelector(".card-content .card-title").innerHTML;
            let url = element.querySelector(".details-btn").src;
            let id = parentElement.id;

            let item = { id: parentElement.id, title: parentElement.id, url: url }

            addItemToFavs(item);
            handelArticlesUi(FvasData, cardSections);
            e.target.src = "../images/heart.png";
            console.log(FvasData);

        }
    }
})




if (FvasData.length != 0) {
    handelArticlesUi(FvasData, cardSections);
}
