let navbar = document.querySelector(".navbar"); let kotakPencarian = document.querySelector(".search-box .bx-search");
kotakPencarian.addEventListener("click", ()=>{navbar.classList.toggle("showInput");if(navbar.classList.contains("showInput")){kotakPencarian.classList.replace("bx-search" ,"bx-x");}else {kotakPencarian.classList.replace("bx-x" ,"bx-search");}});
let navLinks = document.querySelector(".nav-links");let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");menuOpenBtn.onclick = function() {navLinks.style.left = "0";}
menuCloseBtn.onclick = function() {navLinks.style.left = "-100%";}
let htmlcssArrow = document.querySelector(".htmlcss-arrow");htmlcssArrow.onclick = function() {navLinks.classList.toggle("show1");}
let moreArrow = document.querySelector(".more-arrow");moreArrow.onclick = function() {navLinks.classList.toggle("show2");}
let jsArrow = document.querySelector(".js-arrow");jsArrow.onclick = function() {navLinks.classList.toggle("show3");}
const f = document.getElementById('form');const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=abdul+ghofur+234%3A+';const site = '';
function submitted(event) {event.preventDefault();const url = google + site + '+' + q.value;
const win = window.open(url, '_blank');win.focus();}f.addEventListener('submit', submitted);

