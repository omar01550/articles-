

function checkisCardInFavs(ele, arrayOfFavs) {

    if (ele.classList.contains("love-icon")) {
        let titleOfArticle = ele.parentNode.querySelector(".card-content .card-title").innerText;
        //check is article in fas
        if (arrayOfFavs.filter(ele => ele.title == titleOfArticle).length != 0) {
            return 'found';
        } else {
            return 'notFound'
        }

    }


}


export {
    checkisCardInFavs
}