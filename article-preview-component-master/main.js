let share = document.querySelector(".parent .card .text footer .share");
let click = document.querySelector(".parent .card .text footer .clickWindow");
let divParent = document.querySelector(".parent");


share.addEventListener("click", function () {
    if(click.style.display === "flex") click.style.display = "none";
    else click.style.display = "flex";
});


let share0 = document.createElement("img");
if(window.innerWidth <= 900) {
    share0.src = "images/icon-share.svg";
    share0.style.cssText = "border-radius: 30%;\
    background: var(--Light-Grayish-Blue);padding: 5px;cursor: pointer;";
    click.appendChild(share0);
    share0.addEventListener("click",() => {
        if(click.style.display === "flex") click.style.display = "none";
        else click.style.display = "flex";
    });
}


