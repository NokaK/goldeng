import {
  getDifferentElementsArray,
  removeClasses
} from "../utils/getDiffElements";

/**
 *
 *     ? MOBILE burger click
 *
 *
 */

let burger = document.querySelector(".svg_burger");
const navigation__menu = document.querySelector(".navigation__menu");
const body = document.body;

window.burger = () => {
  navigation__menu.classList.toggle("new-opacity");
  //   body.classList.toggle("body--modal-open");
  // mobile_setup.classList.toggle("remove-setup-btn");

  console.log("nav clicked");
  burger.classList.toggle("svg_burger_stroke");
};

///// CRYPTO SECTION
const crypto_section = document.querySelector(".first_click");
const crypto_collapsed = document.querySelector(".crypto_collapsed");

window.cryptoClicked = () => {
  crypto_collapsed.classList.toggle("display-block");

  console.log("clicked crypro");
};

/**
 *
 *     ? MOBILE DROPDOWN
 *
 *
 */

const nav_items = document.querySelectorAll(".navigation__menu__list__items");
const dropdowns = document.querySelectorAll(".dropdown");

nav_items.forEach(item => {
  item.addEventListener("click", e => {
    let clickedElementCaret = item;
    let caret = clickedElementCaret.querySelector(".caret");
    caret.classList.toggle("caret-up");
    let dropdown = clickedElementCaret.querySelector(".dropdown");
    dropdown.classList.toggle("dropdown_open");
    navigation__menu.classList.toggle("dropdown_navigation_transform");

    let differendDropdownEl = getDifferentElementsArray(dropdowns, dropdown);
    removeClasses(differendDropdownEl, "dropdown_open");

    console.log("blxkfdg");
  });
});

/**
 *
 *     ? FOR-NAVBAR
 *
 *
 */

const body_width = document.body.clientWidth;

const sectionOne = document.querySelector(".sectionOne");
const navigation = document.querySelector(".navigation");

const NavOptions = {
  root: null,
  rootMargin: "800px 0px 0px 0px",
  threshold: 0
};

const Navobserver = new IntersectionObserver((entries, Navobserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navigation.classList.remove("observer-nav");
    } else {
      navigation.classList.add("observer-nav");
    }
    console.log(entry.target);
  });
}, NavOptions);
Navobserver.observe(sectionOne);

////// ====================
////      ============== MOBILE AFTER CLICKN ON BURGER INSIDE DROPDOWN
// const items = document.querySelectorAll(".items");

// items.forEach(item => {
//   item.addEventListener("click", e => {
//     let clickedElementCaret = item;

//     let caret = clickedElementCaret.querySelector(".caret");
//     caret.classList.toggle("caret-up");
//     let dropdown = clickedElementCaret.querySelector(".dropdown");

//     dropdown.classList.toggle("dropdown_open");
//     let differendDropdownEl = getDifferentElementsArray(dropdowns, dropdown);
//     removeClasses(differendDropdownEl, "dropdown_open");

//     console.log("ghfjhghjghj");
//   });
// });
