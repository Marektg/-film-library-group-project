!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequire335d;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequire335d=i);var l=i("8nTf5");i("iQCka"),i("inC9c");var n=i("2mLY7"),r=i("14zMx"),o=i("hjlvJ");(0,r.default)("queue");var d=document.querySelectorAll("[data-display-selector]");function c(e){function t(){e.target.classList.contains("btn--active")||(d[0].classList.toggle("btn--active"),d[1].classList.toggle("btn--active"))}switch(e.target.dataset.displaySelector){case"watched":case"queue":t()}}function s(e){switch(e.target.dataset.displaySelector){case"watched":(0,o.displayLoader)(),c(e),(0,r.default)("watched"),(0,n.initializeModal)();break;case"queue":(0,o.displayLoader)(),c(e),(0,r.default)("queue"),(0,n.initializeModal)()}}var u=!0,f=!1,p=void 0;try{for(var v,y=d[Symbol.iterator]();!(u=(v=y.next()).done);u=!0){v.value.addEventListener("click",s)}}catch(e){f=!0,p=e}finally{try{u||null==y.return||y.return()}finally{if(f)throw p}}i("1Eh3C"),(0,l.startHiding)()}();
//# sourceMappingURL=myLibrary.322a39c0.js.map