!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");console.log(n);var o=null;function r(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}function c(t,e){e.setAttribute("disabled",""),t.removeAttribute("disabled")}t.addEventListener("click",(function(){r(),o=setInterval(r,1e3),c(e,t)})),e.addEventListener("click",(function(){clearInterval(o),c(t,e)}))}();
//# sourceMappingURL=01-color-switcher.f1f47667.js.map
