let mybutton = document.getElementById("myBtn"); window.onscroll = function() {scrollFunction()}; function scrollFunction() {
if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 500) {mybutton.style.display = "block";} else {mybutton.style.display = "none";}}
function topFunction() {document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}   
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
const btn = document.querySelector(".btn-toggle");const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"); const savedTheme = localStorage.getItem("theme");if (savedTheme) {document.body.classList.add(savedTheme + "-theme");} else {const defaultTheme = prefersDarkScheme.matches ? "dark" : "light";document.body.classList.add(defaultTheme + "-theme");localStorage.setItem("theme", defaultTheme);}btn.addEventListener("click", () => {const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";const newTheme = currentTheme === "dark" ? "light" : "dark";document.body.classList.toggle("dark-theme");document.body.classList.toggle("light-theme");localStorage.setItem("theme", newTheme);});

