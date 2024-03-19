// do the student icon display the first letter of student's name

(function() {{
    document.querySelector(".generalNav_button").addEventListener("click",(e) => {
        changeBtnState(e,"unactive");
        changeTabState(e);
    })
}})();

function switchActiveBtn() {

}
function changeBtnState(event,state) {
    if (event.target.getAttribute(state)) {
        event.target.removeAttribute(state)
        return;
    }
    event.target.setAttribute(state,"true");
}
function changeTabState(event) {

}
// change state should change tab state 


console.log(
    document.querySelectorAll(".generalNavigation .nav .item:has(.menu.expand)")
)

document.querySelectorAll(".generalNavigation .nav .item:has(.menu.expand)").forEach(
    m => {
        m.querySelector(".innerHolder").style = "display: none"
    }
)