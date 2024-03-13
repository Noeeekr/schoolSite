function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.string.match.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/web.dom-collections.iterator.js";
(function () {
  _toConsumableArray(document.querySelectorAll(".chooseTab li")).forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      changeTab("tab", document.querySelector(".main .accountTabs"), e);
      changeBtnState(e, "UL");
    });
  });
  _toConsumableArray(document.querySelectorAll(".popup .satisfactionBar .innerItem")).forEach(function (option) {
    option.addEventListener("click", function (e) {
      changeBtnState(e, "UL");
    });
  });
  _toConsumableArray(document.querySelectorAll(".input")).forEach(function (input) {
    input.addEventListener("focus", function (e) {
      changeBtnState(e, "DIV", [".inputDecoration"]);
    });
    input.addEventListener("blur", function (e) {
      changeBtnState(e, "DIV", [".inputDecoration"], true);
    });
    input.addEventListener("keyup", function (e) {
      enableSendForm(e, document.querySelector(".signInTab button.submit"));
    });
  });
  _toConsumableArray(document.querySelectorAll(".popup .alternate")).forEach(function (popup) {
    popup.addEventListener("click", function () {
      changeTab("alternate", document.querySelector(".popups .popup.feedback"));
      changeBtnState(document.querySelector(".popup .satisfactionBar"), "UL", null, true);
    });
  });
  document.querySelector("button.submit").addEventListener("click", function (e) {
    e.preventDefault();
    sendToPage("mainPage.html");
  });
  _toConsumableArray(document.querySelectorAll(".popups .popup.cookies .button")).forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelector(".popups .popup .cookiesPopup").classList.remove("active");
    });
  });
})();
function sendToPage(page) {
  window.location.href = page;
}
// validation ;
function enableSendForm(event, button) {
  if (!validateForm(event)) {
    button.setAttribute("disabled", "");
    return;
  }
  button.removeAttribute("disabled");
}
function validateForm(event) {
  var form = event.target;
  while (form.tagName !== "FORM") {
    form = form.parentElement;
  }
  var _form$querySelectorAl = form.querySelectorAll("input"),
    _form$querySelectorAl2 = _slicedToArray(_form$querySelectorAl, 2),
    emailInput = _form$querySelectorAl2[0],
    passwordInput = _form$querySelectorAl2[1];
  if (!(emailInput.value.match(/[\w\d]+?@[\w]+?\.(com|org)/g) && emailInput.value.match(/[\w\d]+?@[\w]+?\.(com|org)/g)[0] === emailInput.value && passwordInput.value.length > 5)) {
    return false;
  }
  return true;
}
// this one changes independentely of quantity 4,5,6 buttons~;
function changeBtnState(eventOrElemen, parent, extraActives, unactivateExtras) {
  // html or boolean ; parent html ; array ;
  var element = eventOrElemen.target ? eventOrElemen.target : eventOrElemen;
  var elementHolder = element;
  while (elementHolder.tagName !== parent) {
    elementHolder = elementHolder.parentElement;
  }
  _toConsumableArray(elementHolder.querySelectorAll(".active")).forEach(function (el) {
    el.classList.remove("active");
  });
  if (unactivateExtras) {
    return;
  }
  element.classList.add("active");
  if (extraActives) {
    extraActives.forEach(function (extra) {
      elementHolder.querySelector("".concat(extra)).classList.add("active");
    });
  }
}
// this changes between specificxz states; 
// a window that opens when you click a button for example;
function changeTab(elementClass, parentElement, event) {
  if (event && event.target.classList.contains("active")) return;
  var next = parentElement.querySelector(".".concat(elementClass, ".unactive"));
  var current = parentElement.querySelector(".".concat(elementClass, ".active"));
  next.classList.remove("unactive");
  next.classList.add("active");
  current.classList.add("unactive");
  current.classList.remove("active");
}