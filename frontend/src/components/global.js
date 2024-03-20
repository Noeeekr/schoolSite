;(function(){
    [...document.querySelectorAll(".input")].forEach((input) => {
        input.addEventListener("focus",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"]);
        })
        input.addEventListener("blur",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"],true);
        })
    });
})();

// this one changes independentely of quantity 4,5,6 buttons~;
function changeBtnState(eventOrElemen,parent,extraActives,unactivateExtras) { // html or boolean ; parent html ; array ;
    let element = eventOrElemen.target ? eventOrElemen.target : eventOrElemen;
    
    let elementHolder = element;
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
// this changes between specificxz states; 
// a window that opens when you click a button for example;
function changeTab(elementClass,parentElement,event) {
    if (event && event.target.classList.contains("active")) return;

    let next = parentElement.querySelector(`.${elementClass}.unactive`);
    let current = parentElement.querySelector(`.${elementClass}.active`);

    next.classList.remove("unactive")
    next.classList.add("active");
    
    current.classList.add("unactive");
    current.classList.remove("active");
}
