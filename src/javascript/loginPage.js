(function(){
    [...document.querySelectorAll(".chooseTab li")].forEach((btn) => {
        btn.addEventListener("click",(e) => {
            changeTab(e);
            changeBtnState(e,"UL");
        })
    });
    [...document.querySelectorAll(".signInInput")].forEach((input) => {
        input.addEventListener("focus",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"])
        })
        input.addEventListener("blur",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"],true)
        })
        input.addEventListener("keyup",(e) => {
            enableSendForm(e,document.querySelector(".signInTab button.submit"))
        })
    });
    document.querySelector("form.signInTab").addEventListener("submit",(e) => {
        changePage(e);
    })
})();

function enableSendForm(event,button) {
    if (!validateForm(event)) {
        button.setAttribute("disabled","");
        return;
    }
    button.removeAttribute("disabled");
}
function changePage(event) {
    event.preventDefault();

    if (!validateForm(event)) return;

    window.location.href = "mainPage.html";
}
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
function changeTab(event) {
    if ([...event.target.classList].includes("active")) return;

    let next = document.querySelector(".tab.unactive");
    let current = document.querySelector(".tab.active");

    next.classList.remove("unactive")
    next.classList.add("active");
    
    current.classList.add("unactive");
    current.classList.remove("active");
}

function validateForm(event) {
    let form = event.target;
    while (form.tagName !== "FORM") {
        form = form.parentElement;
    }
    
    let [emailInput,passwordInput] = form.querySelectorAll("input");
    if (!(
        emailInput.value.match(/[\w\d]+?@[\w]+?\.(com|org)/g)
        && emailInput.value.match(/[\w\d]+?@[\w]+?\.(com|org)/g)[0] === emailInput.value
        && passwordInput.value.length > 5
    )) {
        return false;
    }

    return true;
}
