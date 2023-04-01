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

































































//https://www.youtube.com/api/stats/qoe?fmt=242&afmt=250&cpn=BwGvMC74Fm7pz21Q&el=detailpage&ns=yt&fexp=23983296%2C24004644%2C24007246%2C24007613%2C24080738%2C24135310%2C24169501%2C24219382%2C24255165%2C24396645%2C24404731%2C24405914%2C24415864%2C24430079%2C24433679%2C24439361%2C24449113%2C24450367%2C24455613%2C24468691%2C24474986%2C24482081%2C24488210%2C24493736%2C24499533%2C24499792%2C24515201%2C24516156%2C24517587%2C39323074&cl=520122000&seq=11&docid=Yj3wSY3hWP8&ei=wdEmZM7hAsPX7gPtgInYCg&event=streamingstats&feature=g-high-rec&plid=AAX4MVYYXMYrUtc-&referrer=https%3A%2F%2Fwww.youtube.com%2F&sdetail=p%3A%2F&sourceid=y&cbr=Chrome&cbrver=111.0.0.0&c=WEB&cver=2.20230327.07.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vfs=85.412:242:243:242:r&view=85.412:446:251&vps=85.412:PA&bwm=85.412:160428:8.760&bwe=85.412:22691&bat=85.412:0.6:0&cmt=85.412:17.770&bh=85.412:42.231
