// do the student icon display the first letter of student's name

(function() {{
    document.querySelector(".generalNav_button").addEventListener("click",(e) => {
        changeElState(
            e,
            "unactive",
            document.querySelector(".generalNav_button")
        );
    });
    document.querySelectorAll(".generalNavigation .nav .item .menu.expand").forEach((item) => {
        item.addEventListener("click",(e) => {
            changeElState(
                e,
                "hidden",
                findChildren([...document.querySelectorAll(".generalNavigation .nav .item:has(.menu.expand)")],e.target)
            )
        })
    })
}})();

function findChildren(rry,el) {
    while (!rry.find(item => item === el)) {
        el = el.parentElement
    }

    return rry[rry.indexOf(el)]
}
function changeElState(el,state,target) {
    let htmlEl = el.target ? el.target : el;

    while (htmlEl !== target) {
        htmlEl = htmlEl.parentElement;
    }

    if (htmlEl.getAttribute(state)) {
        htmlEl.removeAttribute(state)
        return;
    }
    htmlEl.setAttribute(state,"true");
}