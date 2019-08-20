"use strict";

// service worker registration 

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

//

const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const buttonHistory = document.querySelector('.button-history--js');
const value = document.querySelector('.counter__value--js');
const history = document.querySelector('.history--js');
const list = document.querySelector('.history__list--js');
const glassWater = document.querySelector('.glass__water-svg--js');
const glassWaterTop = document.querySelector('.glass__water1-svg--js');
const glassBubbles = document.querySelector('.glass__bubbles-svg--js');

const glassesHistory = [];
let key;
let minutes;

const minsToMidnight = () => {
  let now = new Date();
  let then = new Date(now);
  then.setHours(24, 0, 0, 0);
  minutes = then - now;
  console.log(minutes);
}

const howManyGlasses = () => {
  key = new Date().toISOString().slice(0, 10);
  minsToMidnight();

  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, 0)
    value.innerHTML = '0';
  } else {
    value.innerHTML = localStorage.getItem(key);
    waterPosition();
  };

  console.log(key);

  setTimeout(howManyGlasses, minutes);
};

const waterPosition = () => {
  if (localStorage.getItem(key) <= 8) {
    glassWater.style.clipPath = `inset(${84 - (localStorage.getItem(key) * 8)}% 0 0 0 round 0)`;
    glassWaterTop.style.transform = `translateY(${62 - (localStorage.getItem(key) * 8)}%) scaleX(${.82 + localStorage.getItem(key)/40})`;
    if (localStorage.getItem(key) > 7) {
      glassBubbles.style.opacity = 1;
    } else {
      glassBubbles.style.opacity = 0;
    }
  } else {
    glassWater.style.clipPath = 'inset(0 0 0 0 round 0)';
    glassWaterTop.style.transform = 'translateY(-2%) scaleX(1.02)';
    glassBubbles.style.opacity = 1;
  }
};

howManyGlasses();

// buttons

buttonAdd.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  value.innerHTML = localStorage.getItem(key);
  waterPosition();
});

buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));
  if (currentValue > 0) {
    localStorage.setItem(key, localStorage.getItem(key) - 1);
    value.innerHTML = localStorage.getItem(key);
  }
  waterPosition();
});

buttonHistory.addEventListener('click', (e) => {

  history.classList.toggle('history--js-active');
  if (history.classList.contains('history--js-active')) {
    buttonHistory.innerHTML = 'powrót';
  } else {
    buttonHistory.innerHTML = 'historia';
  }

  list.innerHTML = '';
  glassesHistory.length = 0;

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i)[0] == 2) {
      glassesHistory[i] = {
        key: localStorage.key(i),
        value: localStorage.getItem(localStorage.key(i))
      };
    }
  }

  glassesHistory.sort((a, b) => {
    if (a.key < b.key) {
      return 1;
    } else {
      return -1;
    }
  });

  glassesHistory.forEach(item => {

    let copy;
    if (item.value == 0 | item.value > 4) {
      copy = 'szklanek';
    } else if (item.value == 1) {
      copy = 'szklanka';
    } else {
      copy = 'szklanki';
    }

    list.innerHTML += `<li class="history__item">${item.key} / <span class="history__span">${item.value} ${copy} ${(item.value>7)?'👏':''}</span></li>`;
  });
});