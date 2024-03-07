(function(){
    [...document.querySelectorAll(".chooseTab li")].forEach((btn) => {
        btn.addEventListener("click",(e) => {
            changeTab("tab",document.querySelector(".main .accountTabs"),e);
            changeBtnState(e,"UL");
        })
    });
    [...document.querySelectorAll(".popup .satisfactionBar .innerItem")].forEach(option => {
        option.addEventListener("click",(e) => {
            changeBtnState(e,"UL");
        })
    });
    [...document.querySelectorAll(".input")].forEach((input) => {
        input.addEventListener("focus",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"]);
        })
        input.addEventListener("blur",(e) => {
            changeBtnState(e,"DIV",[".inputDecoration"],true);
        })
        input.addEventListener("keyup",(e) => {
            enableSendForm(e,document.querySelector(".signInTab button.submit"));
        })
    });
    [...document.querySelectorAll(".popup .alternate")].forEach((popup) => {
        popup.addEventListener("click",() => {
            changeTab("alternate",document.querySelector(".popups .popup.feedback"))
            changeBtnState(
                document.querySelector(".popup .satisfactionBar"),
                "UL",
                null,
                true
            )
        })
    });
    document.querySelector("button.submit").addEventListener("click",(e) => {
        e.preventDefault();
        sendToPage("mainPage.html");
    });
    [...document.querySelectorAll(".popups .popup.cookies .button")].forEach((btn) => {
        btn.addEventListener("click",() => {
            document.querySelector(".popups .popup .cookiesPopup").classList.remove("active")         })
    })
})();
function sendToPage(page) {
    window.location.href = page;
}
// validation ;
function enableSendForm(event,button) {
    if (!validateForm(event)) {
        button.setAttribute("disabled","");
        return;
    }
    button.removeAttribute("disabled");
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