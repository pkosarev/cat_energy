console.log('hi');

let nav_toggle = document.querySelector('.main-nav__toggle');
let nav_list = document.querySelector('.main-nav');

nav_toggle.onclick = function () {
  nav_toggle.classList.toggle('main-nav__toggle-open');
  nav_toggle.classList.toggle('main-nav__toggle-open-close');

  nav_list.classList.toggle('page-header__nav-open');
  nav_list.classList.toggle('page-header__nav-open-close');
};


let koef = document.querySelector('.example__img-before').width / 100;
let img1 = document.getElementById("example__img1");

function example() {
  let size = document.getElementById("example__range").value;
  let max = document.getElementById("example__range").max;

  img1.style.width = (max - size) * koef +'px';
}


let btnBefore = document.getElementById("btnBefore");
let btnAfter = document.getElementById("btnAfter");

btnAfter.onclick = function () {
  img1.style.width = '0px';
  document.getElementById("example__range").value = 100;
}
btnBefore.onclick = function () {
  img1.style.width = koef * 100 + 'px';
  document.getElementById("example__range").value = 0;

}
