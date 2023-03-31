import { handelNav } from "./nav.js";
import { getArticlesFromDb } from "./functions.js";
import { handelArticlesUi } from "./functions.js";
import { Card } from "./functions.js";
import { getFavs } from "./addToFav.js";
import { checkIsItemInFav } from "./addToFav.js";

const apiKey = "d6e13b09676346608115146fd709df84";

handelNav(); // handel nav bar

// handel favs

let favs = getFavs();
document.documentElement.addEventListener("click", function (e) {
    if (e.target.classList.contains("love-icon")) {
        if (checkIsItemInFav(e.target.parentNode, favs) == "found") {


            removeItemFromTfavs(e.target.parentNode.id);
            e.target.src = "../images/empty-heart.png";
        } else {
            let element = e.target.parentNode;
            let parentElement = e.target.parentNode;
            // let title = element.querySelector(".card-content .card-title").innerHTML;
            let url = element.querySelector(".details-btn").src;
            let id = parentElement.id;

            let item = { id: parentElement.id, title: parentElement.id, url: url }

            addItemToFavs(item);
            e.target.src = "../images/heart.png";
            console.log(favs);

        }
    }
})


function addItemToFavs(item) {
    favs.push(item)
    window.localStorage.setItem("favs", JSON.stringify(favs))
}

function removeItemFromTfavs(id) {
    favs = favs.filter(ele => ele.id != id);
    window.localStorage.setItem("favs", JSON.stringify(favs))


}






let sectionCount = 6;

///section football
const footballUrl = `https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}`;
const footballSection = document.querySelector(".football-articles .articles");


getArticlesFromDb(footballUrl)
    .then((articles) => {
        articles.length = sectionCount;
        handelArticlesUi(articles, footballSection)
    })

// handel movies section
const moviesUrl = `https://newsapi.org/v2/everything?q=movies&apiKey=${apiKey}`;
const moviesSection = document.querySelector(".movies-articles .articles")

getArticlesFromDb(moviesUrl)
    .then((articles) => {
        articles.length = sectionCount;
        handelArticlesUi(articles, moviesSection)
    });





getArticlesFromDb(`https://newsapi.org/v2/everything?q=pages&apiKey=${apiKey}`)
    .then(function (articles) {
        console.log(articles);
        console.log('done');
    });


