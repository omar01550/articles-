import { handelNav } from "./nav.js";
import { getArticlesFromDb } from "./functions.js";
import { handelArticlesUi } from "./functions.js";
import { Card } from "./functions.js";

handelNav(); // handel nav bar

let sectionCount = 6;

///section football
const footballUrl = `https://newsapi.org/v2/everything?q=football&apiKey=eca3af45d29448ee972191f842925ca0`;
const footballSection = document.querySelector(".football-articles .articles");


getArticlesFromDb(footballUrl)
    .then((articles) => {
        articles.length = sectionCount;
        handelArticlesUi(articles, footballSection)
    })

// handel movies section
const moviesUrl = `https://newsapi.org/v2/everything?q=movies&apiKey=eca3af45d29448ee972191f842925ca0`;
const moviesSection = document.querySelector(".movies-articles .articles")

getArticlesFromDb(moviesUrl)
    .then((articles) => {
        articles.length = sectionCount;
        handelArticlesUi(articles, moviesSection)
    });





getArticlesFromDb(`https://newsapi.org/v2/everything?q=pages&apiKey=eca3af45d29448ee972191f842925ca0`)
    .then(function (articles) {
        console.log(articles);
        console.log('done');
    });






