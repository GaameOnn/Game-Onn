let Body = document.body

const scrollUp = document.querySelector(".scrollUp");
console.log();
scrollUp.onclick = () => {
    console.log(scrollTop);
}
window.addEventListener("click", (event) => {
    let scroll = this.scrollY;
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUp.style.display = "flex";
    }
    else {
        scrollUp.style.display = "none";
    }
}

function topFunction() {

    window.scrollTo({ top: 0, behavior: 'smooth' })
}
scrollUp.onclick = () => {
    topFunction()
}

// --------------------------------------
const gamesLink = document.querySelector(".gamesLink");
const contactsLink = document.querySelector(".contactsLink");
const gamesSection = document.querySelector(".container2");
const footer = document.querySelector(".footer");

gamesLink.addEventListener("click", () => {
    window.scrollTo({ top: gamesSection.offsetTop - 80, behavior: "smooth" });
});

contactsLink.addEventListener("click", () => {
    window.scrollTo({ top: footer.offsetTop - 80, behavior: "smooth" });
});

// --------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const Body = document.body;
    const ClickHome = document.querySelector(".ClickHome");
    const ClickBox = document.querySelector(".ClickBox");
    const blockTops = document.querySelector(".blockTops");
    const ContBlock1 = document.querySelector(".ContBlock1");

    let isBlack = false;

    ClickBox.addEventListener("click", () => {
        if (isBlack) {
            Body.style.backgroundColor = "";
            ClickHome.style.color = "";
            blockTops.style.color = "";
            ContBlock1.style.color = "";
            ClickBox.src = "./image/SUN C++Super.png";
        } else {
            Body.style.backgroundColor = "black";
            ClickHome.style.color = "white";
            blockTops.style.color = "white";
            ContBlock1.style.color = "rgb(165, 30, 199)";
            ClickBox.src = "./image/image Luna.png";
        }
        isBlack = !isBlack;
    });
});
// -------------------------------

const contactLink = document.querySelector(".instagram");
const contactLink1 = document.querySelector(".fesbook");
const contactLink2 = document.querySelector(".tiktok");

if (contactLink) {
    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://www.instagram.com/game_on_ps_vanadzor/", "_blank");
    });
}
if (contactLink1) {
    contactLink1.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://www.facebook.com/p/Game-On-Ps-Vanadzor-100080239031864/", "_blank");
    });
}
if (contactLink2) {
    contactLink2.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://www.tiktok.com/@gameonpsvanadzor", "_blank");
    });
}