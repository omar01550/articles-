import { getArticlesFromDb } from "./functions";
import { handelArticlesUi } from "./functions";
import { Card } from "./functions";
import { handelNav } from "./nav";

let mainSection = document.querySelector(".main-section");
const url = `https://newsapi.org/v2/everything?q=movies&apiKey=eca3af45d29448ee972191f842925ca0`;

handelNav()
console.log(true);

getArticlesFromDb(url)
    .then((articles) => {
        handelArticlesUi(articles, mainSection)
    });


