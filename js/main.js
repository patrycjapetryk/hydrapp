!function(n){var t={};function e(l){if(t[l])return t[l].exports;var c=t[l]={i:l,l:!1,exports:{}};return n[l].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=n,e.c=t,e.d=function(n,t,l){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:l})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(l,c,function(t){return n[t]}.bind(null,c));return l},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst buttonAdd = document.querySelector('.button-add--js');\nconst buttonRemove = document.querySelector('.button-remove--js');\nconst buttonHistory = document.querySelector('.button-history--js');\nconst value = document.querySelector('.counter__value--js');\nconst key = new Date().toISOString().slice(0, 10);\nconst history = document.querySelector('.history--js');\nconst list = document.querySelector('.history__list--js');\nconst glassWater = document.querySelector('.glass__water-svg--js');\nconst glassWaterTop = document.querySelector('.glass__water1-svg--js');\nconst glassBubbles = document.querySelector('.glass__bubbles-svg--js');\n\nif (!localStorage.getItem(key)) {\n  localStorage.setItem(key, 0)\n  value.innerHTML = '0';\n} else {\n  value.innerHTML = localStorage.getItem(key);\n};\n\nconst waterPosition = () => {\n  if (localStorage.getItem(key) <= 8) {\n    glassWater.style.clipPath = `inset(${84 - (localStorage.getItem(key) * 8)}% 0 0 0 round 0)`;\n    glassWaterTop.style.transform = `translateY(${62 - (localStorage.getItem(key) * 8)}%) scaleX(${.82 + localStorage.getItem(key)/40})`;\n    if (localStorage.getItem(key) > 7) {\n      glassBubbles.style.opacity = 1;\n    } else {\n      glassBubbles.style.opacity = 0;\n    }\n  } else {\n    glassWater.style.clipPath = 'inset(0 0 0 0 round 0)';\n    glassWaterTop.style.transform = 'translateY(-2%) scaleX(1.02)';\n    glassBubbles.style.opacity = 1;\n  }\n};\n\nwaterPosition();\n\nbuttonAdd.addEventListener('click', (e) => {\n  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);\n  value.innerHTML = localStorage.getItem(key);\n  waterPosition();\n});\n\nbuttonRemove.addEventListener('click', (e) => {\n  const currentValue = parseInt(localStorage.getItem(key));\n  if (currentValue > 0) {\n    localStorage.setItem(key, localStorage.getItem(key) - 1);\n    value.innerHTML = localStorage.getItem(key);\n  }\n  waterPosition();\n});\n\nbuttonHistory.addEventListener('click', (e) => {\n\n  list.innerHTML = '';\n  history.classList.toggle('history--js-active');\n  if (history.classList.contains('history--js-active')) {\n    buttonHistory.innerHTML = 'powrót';\n  } else {\n    buttonHistory.innerHTML = 'historia';\n  }\n\n  for (let i = 0; i < localStorage.length; i++) {\n    const key = localStorage.key(i);\n    const value = localStorage.getItem(key);\n    let copy;\n    if (value == 0 | value > 4) {\n      copy = 'szklanek';\n    } else if (value == 1) {\n      copy = 'szklanka';\n    } else {\n      copy = 'szklanki';\n    }\n    if (key[0] == 2) {\n      list.innerHTML += `<li class=\"history__item\">${key} / <span class=\"history__span\">${value} ${copy} ${(value>7)?'👏':''}</span></li>`;\n    };\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxxQ0FBcUM7QUFDOUUsa0RBQWtELHFDQUFxQyxZQUFZLG1DQUFtQztBQUN0STtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxJQUFJLGlDQUFpQyxNQUFNLEdBQUcsS0FBSyxHQUFHLGtCQUFrQjtBQUM3SDtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hZGQtLWpzJyk7XG5jb25zdCBidXR0b25SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJlbW92ZS0tanMnKTtcbmNvbnN0IGJ1dHRvbkhpc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWhpc3RvcnktLWpzJyk7XG5jb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyX192YWx1ZS0tanMnKTtcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5jb25zdCBoaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnktLWpzJyk7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpc3RvcnlfX2xpc3QtLWpzJyk7XG5jb25zdCBnbGFzc1dhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX193YXRlci1zdmctLWpzJyk7XG5jb25zdCBnbGFzc1dhdGVyVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX193YXRlcjEtc3ZnLS1qcycpO1xuY29uc3QgZ2xhc3NCdWJibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsYXNzX19idWJibGVzLXN2Zy0tanMnKTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMClcbiAgdmFsdWUuaW5uZXJIVE1MID0gJzAnO1xufSBlbHNlIHtcbiAgdmFsdWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn07XG5cbmNvbnN0IHdhdGVyUG9zaXRpb24gPSAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDw9IDgpIHtcbiAgICBnbGFzc1dhdGVyLnN0eWxlLmNsaXBQYXRoID0gYGluc2V0KCR7ODQgLSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAqIDgpfSUgMCAwIDAgcm91bmQgMClgO1xuICAgIGdsYXNzV2F0ZXJUb3Auc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHs2MiAtIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICogOCl9JSkgc2NhbGVYKCR7LjgyICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KS80MH0pYDtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA+IDcpIHtcbiAgICAgIGdsYXNzQnViYmxlcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xhc3NCdWJibGVzLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBnbGFzc1dhdGVyLnN0eWxlLmNsaXBQYXRoID0gJ2luc2V0KDAgMCAwIDAgcm91bmQgMCknO1xuICAgIGdsYXNzV2F0ZXJUb3Auc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTIlKSBzY2FsZVgoMS4wMiknO1xuICAgIGdsYXNzQnViYmxlcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfVxufTtcblxud2F0ZXJQb3NpdGlvbigpO1xuXG5idXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICsgMSk7XG4gIHZhbHVlLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIHdhdGVyUG9zaXRpb24oKTtcbn0pO1xuXG5idXR0b25SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjdXJyZW50VmFsdWUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgaWYgKGN1cnJlbnRWYWx1ZSA+IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgLSAxKTtcbiAgICB2YWx1ZS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG4gIHdhdGVyUG9zaXRpb24oKTtcbn0pO1xuXG5idXR0b25IaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICBoaXN0b3J5LmNsYXNzTGlzdC50b2dnbGUoJ2hpc3RvcnktLWpzLWFjdGl2ZScpO1xuICBpZiAoaGlzdG9yeS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpc3RvcnktLWpzLWFjdGl2ZScpKSB7XG4gICAgYnV0dG9uSGlzdG9yeS5pbm5lckhUTUwgPSAncG93csOzdCc7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uSGlzdG9yeS5pbm5lckhUTUwgPSAnaGlzdG9yaWEnO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICBsZXQgY29weTtcbiAgICBpZiAodmFsdWUgPT0gMCB8IHZhbHVlID4gNCkge1xuICAgICAgY29weSA9ICdzemtsYW5layc7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PSAxKSB7XG4gICAgICBjb3B5ID0gJ3N6a2xhbmthJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29weSA9ICdzemtsYW5raSc7XG4gICAgfVxuICAgIGlmIChrZXlbMF0gPT0gMikge1xuICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImhpc3RvcnlfX2l0ZW1cIj4ke2tleX0gLyA8c3BhbiBjbGFzcz1cImhpc3RvcnlfX3NwYW5cIj4ke3ZhbHVlfSAke2NvcHl9ICR7KHZhbHVlPjcpPyfwn5GPJzonJ308L3NwYW4+PC9saT5gO1xuICAgIH07XG4gIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);