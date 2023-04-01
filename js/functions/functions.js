async function getArticlesFromDb(url) {

    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    let articles = data.articles;
    console.log(articles);
    return articles;

};




function handelArticlesUi(articles, section) {
    section.innerHTML = '';
    console.log(section);

    articles.forEach(element => {
        section.append(Card(element))
    });

}



// card function 
function Card(element) {
    console.log(element);
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = element.title;
    let cardFav;
    let FavsData = JSON.parse(window.localStorage.getItem("favs")) || [];
    let favIconImage = '';

    if (FavsData.filter(ele => ele.id == card.id).length != 0) {
        favIconImage = 'images/heart.png'
    } else {
        favIconImage = 'images/empty-heart.png'

    }
    card.innerHTML = `
    <div class="card-overlay"></div>
    <img class="love-icon" src=${favIconImage} alt="not found"/>
    <img src=${element.urlToImage} alt=${element.title} class="article-image"/>
    <div class="card-content">
        <h3 class="card-title">${element.title}</h3>
        <p class="card-text">${element.describtion}</p>
        <a class="details-btn" href=${element.url}>
            details
        </a>
    </div>
    `
    return card;
}


export {
    getArticlesFromDb,
    handelArticlesUi,
    Card
}