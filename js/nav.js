function handelNav() {
    let menuBar = document.querySelector("header .fa-bars");
    let closer = document.querySelector(".closer");
    let navMenu = document.querySelector(".nav-menu");


    menuBar.addEventListener("click", function () {
        navMenu.classList.remove("hidden-nav");

    })

    closer.addEventListener("click", function () {
        navMenu.classList.add("hidden-nav");
    });

    document.querySelector(".close-nav").addEventListener("click", function () {
        navMenu.classList.add("hidden-nav");
    })

}



export {
    handelNav
}