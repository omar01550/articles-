function getFavs() {


    if (window.localStorage.getItem("favs")) {
        return JSON.parse(window.localStorage.getItem("favs"));
    } else {
        return [];
    }

}




function checkIsItemInFav(element, favs) {
    let elementId = element.id;

    if (favs.filter(ele => ele.title == element.id).length != 0) {

        return 'found';
    } else {

        return 'notfound';
    }
}









export {
    getFavs,
    checkIsItemInFav
}