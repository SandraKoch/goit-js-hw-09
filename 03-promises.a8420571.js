!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var r=t("h6c0i");document.querySelector(".form").classList.add("promises-form");var i,c,u,a=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]'),s=document.querySelector('[type="submit"]');function f(e,o){var n={position:e,delay:o};return new Promise((function(e,t){var r=Math.random()>.3;setTimeout((function(){r?e(n):t(n)}),o)}))}console.log(s),s.addEventListener("click",(function(e){e.preventDefault(),i=Number(a.value),c=Number(l.value),u=Number(d.value);for(var o=0;o<u;o++){f(o+1,i+c*o).then((function(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.a8420571.js.map