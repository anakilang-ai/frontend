import { fetchData } from "https://jscroot.github.io/api/croot.js";
import { retrieveCookie } from "https://jscroot.github.io/cookie/croot.js";
import { addClickListener } from 'https://jscroot.github.io/element/croot.js';
import { initializeMenuButton, setupNavbar } from '/js/src/custom.js';

// let userCookie = retrieveCookie("Login")
// if (userCookie === ""){
//     alert("Please sign in first");
//     window.location.href = "https://anakilang-ai.github.io/login.html";
// }

initializeMenuButton();
setupNavbar();

addClickListener('popup-closer', handleClosePopupClick);
addClickListener('insertmarkerbutton', handleMarkerSubmit);
addClickListener('hapusbutton', handleMarkerDelete);
addClickListener('hitungcogbutton', fetchAllCoordinates);