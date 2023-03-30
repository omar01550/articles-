import { handelArticlesUi } from './functions.js';
import { getArticlesFromDb } from './functions.js';
import { Card } from './functions.js';
import { handelNav } from './nav.js';

let searchForm = document.getElementById("search-form");
let serachInput = document.getElementById("search-box")
let resultSection = document.querySelector("#search-results .search-result-cards");
let resultLoder = document.getElementById("result-loder");


handelNav()


searchForm.onsubmit = function (e) {
    e.preventDefault();
    resultLoder.classList.remove("hidden-loder");
    console.log(resultLoder);

    getArticlesFromDb(`https://newsapi.org/v2/everything?q=${serachInput.value}&apiKey=eca3af45d29448ee972191f842925ca0`)

        .then((articles) => {
            if (articles.length > 50) {
                articles.length = 50;
            }



            handelArticlesUi(articles, resultSection)
            resultLoder.classList.add("hidden-loder");
            document.querySelector(".result-for").innerHTML = `results for ${serachInput.value}`
            serachInput.value = ''
        })

}


