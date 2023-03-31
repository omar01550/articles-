async function getArticlesFromDb(url) {

    let response = await fetch(url);

    let data = await response.json();
    let articles = data.articles;

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
    card.innerHTML = `
    <div class="card-overlay"></div>
    <img class="love-icon" src="../images/empty-heart.png" alt="not found"/>
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