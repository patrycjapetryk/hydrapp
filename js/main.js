!function(e){var n={};function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(l,c,function(n){return e[n]}.bind(null,c));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\n\nconst buttonAdd = document.querySelector('.button-add--js');\nconst buttonRemove = document.querySelector('.button-remove--js');\nconst buttonHistory = document.querySelector('.button-history--js');\nconst value = document.querySelector('.counter__value--js');\nconst key = new Date().toISOString().slice(0, 10);\n\nif (!localStorage.getItem(key)) {\n  localStorage.setItem(key, 0)\n  value.innerHTML = '0';\n} else {\n  value.innerHTML = localStorage.getItem(key);\n}\n\nbuttonAdd.addEventListener('click', (e) => {\n  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1)\n  value.innerHTML = localStorage.getItem(key);\n})\n\n\nbuttonRemove.addEventListener('click', (e) => {\n  const currentValue = parseInt(localStorage.getItem(key));\n  if (currentValue > 0) {\n    localStorage.setItem(key, localStorage.getItem(key) - 1)\n    value.innerHTML = localStorage.getItem(key);\n  }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuXG5jb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWFkZC0tanMnKTtcbmNvbnN0IGJ1dHRvblJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcmVtb3ZlLS1qcycpO1xuY29uc3QgYnV0dG9uSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24taGlzdG9yeS0tanMnKTtcbmNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXJfX3ZhbHVlLS1qcycpO1xuY29uc3Qga2V5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMClcbiAgdmFsdWUuaW5uZXJIVE1MID0gJzAnO1xufSBlbHNlIHtcbiAgdmFsdWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSArIDEpXG4gIHZhbHVlLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59KVxuXG5cbmJ1dHRvblJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICBpZiAoY3VycmVudFZhbHVlID4gMCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAtIDEpXG4gICAgdmFsdWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);