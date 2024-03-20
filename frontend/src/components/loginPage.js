(function(){
    [...document.querySelectorAll(".chooseTab li")].forEach((btn) => {
        btn.addEventListener("click",(e) => {
            changeTab("tab",document.querySelector(".main .accountTabs"),e);
            changeBtnState(e,"UL");
        })
    });
    document.querySelector("button.submit").addEventListener("click",(e) => {
        e.preventDefault();
        sendToPage("mainPage.html");
    });
    [...document.querySelectorAll(".input")].forEach((input) => {
        input.addEventListener("keyup",(e) => {
            enableSendForm(e,document.querySelector(".signInTab button.submit"));
        })
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