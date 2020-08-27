'use strict';

let card = document.querySelector('.page-main__card');
let circle = document.querySelector('.page-main__circle');
let buy = document.querySelectorAll('.page-main__buy');
let selected = document.querySelectorAll('.page-main__selected');

let changeBorderColor = function () {
  let card = document.querySelectorAll('.page-main__card');

  for (var i = 0; i < card.length; i++) {
    card[i].classList.add('selected-border');
  }
};

let changeCircleColor = function () {
  let circle = document.querySelectorAll('.page-main__circle');

  for (var i = 0; i < circle.length; i++) {
    circle[i].classList.remove('default-circle');
    circle[i].classList.add('selected-circle');
  }
};

let hideElement = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.add('hidden');
  }
};

let showElement = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove('hidden');
  }
};

let makeElementSelected = function () {
  changeBorderColor();
  changeCircleColor();
  hideElement(buy);
  showElement(selected);
};

let pressCard = function () {
  let card = document.querySelectorAll('.page-main__card');
  for (var i = 0; i < card.length; i++) {
    card[i].onclick =  makeElementSelected;
  }
};
pressCard();
