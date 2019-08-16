"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const buttonHistory = document.querySelector('.button-history--js');
const value = document.querySelector('.counter__value--js');
const key = new Date().toISOString().slice(0, 10);
const history = document.querySelector('.history--js');
const list = document.querySelector('.history__list--js');

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  value.innerHTML = '0';
} else {
  value.innerHTML = localStorage.getItem(key);
};

buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  value.innerHTML = localStorage.getItem(key);
});

buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));
  if (currentValue > 0) {
    localStorage.setItem(key, localStorage.getItem(key) - 1);
    value.innerHTML = localStorage.getItem(key);
  }
});

buttonHistory.addEventListener('click', (e) => {

  list.innerHTML = '';
  history.classList.toggle('history--js-active');
  if (history.classList.contains('history--js-active')) {
    buttonHistory.innerHTML = 'powrót';
  } else {
    buttonHistory.innerHTML = 'historia';
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    let copy;
    if (value == 0 | value > 4) {
      copy = 'szklanek';
    } else if (value == 1) {
      copy = 'szklanka';
    } else {
      copy = 'szklanki';
    }
    if (key[0] == 2) {
      list.innerHTML += `<li class="history__item">${key} / ${value} ${copy}</li>`;
    };
  }
});