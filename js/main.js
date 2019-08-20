!function(n){var t={};function e(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return n[l].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=n,e.c=t,e.d=function(n,t,l){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:l})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(l,c,function(t){return n[t]}.bind(null,c));return l},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration \n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n//\n\nconst buttonAdd = document.querySelector('.button-add--js');\nconst buttonRemove = document.querySelector('.button-remove--js');\nconst buttonHistory = document.querySelector('.button-history--js');\nconst value = document.querySelector('.counter__value--js');\nconst history = document.querySelector('.history--js');\nconst list = document.querySelector('.history__list--js');\nconst glassWater = document.querySelector('.glass__water-svg--js');\nconst glassWaterTop = document.querySelector('.glass__water1-svg--js');\nconst glassBubbles = document.querySelector('.glass__bubbles-svg--js');\n\nconst glassesHistory = [];\n\nconst key = new Date().toISOString().slice(0, 10);\n\nif (!localStorage.getItem(key)) {\n  localStorage.setItem(key, 0)\n  value.innerHTML = '0';\n} else {\n  value.innerHTML = localStorage.getItem(key);\n};\n\nconst waterPosition = () => {\n  if (localStorage.getItem(key) <= 8) {\n    glassWater.style.clipPath = `inset(${84 - (localStorage.getItem(key) * 8)}% 0 0 0 round 0)`;\n    glassWaterTop.style.transform = `translateY(${62 - (localStorage.getItem(key) * 8)}%) scaleX(${.82 + localStorage.getItem(key)/40})`;\n    if (localStorage.getItem(key) > 7) {\n      glassBubbles.style.opacity = 1;\n    } else {\n      glassBubbles.style.opacity = 0;\n    }\n  } else {\n    glassWater.style.clipPath = 'inset(0 0 0 0 round 0)';\n    glassWaterTop.style.transform = 'translateY(-2%) scaleX(1.02)';\n    glassBubbles.style.opacity = 1;\n  }\n};\n\nwaterPosition();\n\nbuttonAdd.addEventListener('click', (e) => {\n  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);\n  value.innerHTML = localStorage.getItem(key);\n  waterPosition();\n});\n\nbuttonRemove.addEventListener('click', (e) => {\n  const currentValue = parseInt(localStorage.getItem(key));\n  if (currentValue > 0) {\n    localStorage.setItem(key, localStorage.getItem(key) - 1);\n    value.innerHTML = localStorage.getItem(key);\n  }\n  waterPosition();\n});\n\n\nbuttonHistory.addEventListener('click', (e) => {\n\n  history.classList.toggle('history--js-active');\n  if (history.classList.contains('history--js-active')) {\n    buttonHistory.innerHTML = 'powrót';\n  } else {\n    buttonHistory.innerHTML = 'historia';\n  }\n\n  list.innerHTML = '';\n  glassesHistory.length = 0;\n\n  for (let i = 0; i < localStorage.length; i++) {\n    if (localStorage.key(i)[0] == 2) {\n      glassesHistory[i] = {\n        key: localStorage.key(i),\n        value: localStorage.getItem(localStorage.key(i))\n      };\n    }\n  }\n\n  glassesHistory.sort((a, b) => {\n    if (a.key < b.key) {\n      return 1;\n    } else {\n      return -1;\n    }\n  });\n\n  glassesHistory.forEach(item => {\n\n    let copy;\n    if (item.value == 0 | item.value > 4) {\n      copy = 'szklanek';\n    } else if (item.value == 1) {\n      copy = 'szklanka';\n    } else {\n      copy = 'szklanki';\n    }\n\n    list.innerHTML += `<li class=\"history__item\">${item.key} / <span class=\"history__span\">${item.value} ${copy} ${(item.value>7)?'👏':''}</span></li>`;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMscUNBQXFDO0FBQzlFLGtEQUFrRCxxQ0FBcUMsWUFBWSxtQ0FBbUM7QUFDdEk7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtREFBbUQsU0FBUyxpQ0FBaUMsV0FBVyxHQUFHLEtBQUssR0FBRyx1QkFBdUI7QUFDMUksR0FBRztBQUNILENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gXG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vXG5cbmNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYWRkLS1qcycpO1xuY29uc3QgYnV0dG9uUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1yZW1vdmUtLWpzJyk7XG5jb25zdCBidXR0b25IaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1oaXN0b3J5LS1qcycpO1xuY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlcl9fdmFsdWUtLWpzJyk7XG5jb25zdCBoaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnktLWpzJyk7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnlfX2xpc3QtLWpzJyk7XG5jb25zdCBnbGFzc1dhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX193YXRlci1zdmctLWpzJyk7XG5jb25zdCBnbGFzc1dhdGVyVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX193YXRlcjEtc3ZnLS1qcycpO1xuY29uc3QgZ2xhc3NCdWJibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX19idWJibGVzLXN2Zy0tanMnKTtcblxuY29uc3QgZ2xhc3Nlc0hpc3RvcnkgPSBbXTtcblxuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMClcbiAgdmFsdWUuaW5uZXJIVE1MID0gJzAnO1xufSBlbHNlIHtcbiAgdmFsdWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn07XG5cbmNvbnN0IHdhdGVyUG9zaXRpb24gPSAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDw9IDgpIHtcbiAgICBnbGFzc1dhdGVyLnN0eWxlLmNsaXBQYXRoID0gYGluc2V0KCR7ODQgLSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAqIDgpfSUgMCAwIDAgcm91bmQgMClgO1xuICAgIGdsYXNzV2F0ZXJUb3Auc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHs2MiAtIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICogOCl9JSkgc2NhbGVYKCR7LjgyICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KS80MH0pYDtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA+IDcpIHtcbiAgICAgIGdsYXNzQnViYmxlcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xhc3NCdWJibGVzLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBnbGFzc1dhdGVyLnN0eWxlLmNsaXBQYXRoID0gJ2luc2V0KDAgMCAwIDAgcm91bmQgMCknO1xuICAgIGdsYXNzV2F0ZXJUb3Auc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTIlKSBzY2FsZVgoMS4wMiknO1xuICAgIGdsYXNzQnViYmxlcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfVxufTtcblxud2F0ZXJQb3NpdGlvbigpO1xuXG5idXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICsgMSk7XG4gIHZhbHVlLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIHdhdGVyUG9zaXRpb24oKTtcbn0pO1xuXG5idXR0b25SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgLSAxKTtcbiAgICB2YWx1ZS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG4gIHdhdGVyUG9zaXRpb24oKTtcbn0pO1xuXG5cbmJ1dHRvbkhpc3RvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gIGhpc3RvcnkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlzdG9yeS0tanMtYWN0aXZlJyk7XG4gIGlmIChoaXN0b3J5LmNsYXNzTGlzdC5jb250YWlucygnaGlzdG9yeS0tanMtYWN0aXZlJykpIHtcbiAgICBidXR0b25IaXN0b3J5LmlubmVySFRNTCA9ICdwb3dyw7N0JztcbiAgfSBlbHNlIHtcbiAgICBidXR0b25IaXN0b3J5LmlubmVySFRNTCA9ICdoaXN0b3JpYSc7XG4gIH1cblxuICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICBnbGFzc2VzSGlzdG9yeS5sZW5ndGggPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5rZXkoaSlbMF0gPT0gMikge1xuICAgICAgZ2xhc3Nlc0hpc3RvcnlbaV0gPSB7XG4gICAgICAgIGtleTogbG9jYWxTdG9yYWdlLmtleShpKSxcbiAgICAgICAgdmFsdWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGdsYXNzZXNIaXN0b3J5LnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5rZXkgPCBiLmtleSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0pO1xuXG4gIGdsYXNzZXNIaXN0b3J5LmZvckVhY2goaXRlbSA9PiB7XG5cbiAgICBsZXQgY29weTtcbiAgICBpZiAoaXRlbS52YWx1ZSA9PSAwIHwgaXRlbS52YWx1ZSA+IDQpIHtcbiAgICAgIGNvcHkgPSAnc3prbGFuZWsnO1xuICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PSAxKSB7XG4gICAgICBjb3B5ID0gJ3N6a2xhbmthJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29weSA9ICdzemtsYW5raSc7XG4gICAgfVxuXG4gICAgbGlzdC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImhpc3RvcnlfX2l0ZW1cIj4ke2l0ZW0ua2V5fSAvIDxzcGFuIGNsYXNzPVwiaGlzdG9yeV9fc3BhblwiPiR7aXRlbS52YWx1ZX0gJHtjb3B5fSAkeyhpdGVtLnZhbHVlPjcpPyfwn5GPJzonJ308L3NwYW4+PC9saT5gO1xuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);