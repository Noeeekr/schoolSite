(function(){
    [...document.querySelectorAll(".chooseTab li")].forEach((btn) => {
        btn.addEventListener("click",(e) => {
            changeBtnState(e,"UL");
            changeTab(e);
        })
    });
    [...document.querySelectorAll(".signInInput")].forEach((input) => {
        input.addEventListener("focus",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"])
        })
        input.addEventListener("blur",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"],true)
        })
    });
})();


function changeBtnState(eventOrElemen,parent,extraActives,unactivateExtras) { // html or boolean ; parent html ; array ;
    let element = eventOrElemen.target ? eventOrElemen.target : eventOrElemen;

    let elementHolder = element.parentElement;
    while (elementHolder.tagName !== parent) {
        elementHolder = elementHolder.parentElement;
    }

    [...elementHolder.querySelectorAll(".active")].forEach(el => {
        el.classList.remove("active");
    })

    if (unactivateExtras) {
        return;
    }
    
    element.classList.add("active");
    if (extraActives) {
        extraActives.forEach(extra => {
            elementHolder.querySelector(`${extra}`).classList.add("active")
        })
    }
}
function changeTab() {
    let next = document.querySelector(".tab.unactive");
    let current = document.querySelector(".tab.active");

    next.classList.remove("unactive")
    next.classList.add("active");
    
    current.classList.add("unactive");
    current.classList.remove("active");
}