!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("alpineCarousel",[],t):"object"==typeof exports?exports.alpineCarousel=t():e.alpineCarousel=t()}(this,(function(){return(()=>{"use strict";var e={654:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:()=>u});var s=function(e){var t=[];return e&&e.map((function(e){t.push(new Promise((function(t,n){var r=new Image;r.src=e,r.onload=function(){return t(r)},r.onabort=function(){return n(e)},r.onerror=function(){return n(e)}})))})),Promise.all(t)};const u=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Array.isArray(e)||0===e.length)throw"You must pass an an array of images as the first argument";var r=Object.assign({speed:10,infinite:!0,reverse:!0,isLoaded:!1,keepPosition:!0},n);return i(i({},r),{},(o(t={images:e,carousel:{current:0,currentPath:null},mouse:{isMoving:!1,savedPositionX:0,currentPositionX:0},start:function(){var e=this;this.handleLoading().then((function(){e.isLoaded=!0,e.carousel.currentPath=e.images[e.carousel.current]})),this.$watch("images",(function(){e.handleLoading().then((function(){var t=e.images[e.carousel.current];if(e.keepPosition&&t)return e.slideTo(e.carousel.current);e.slideTo(0)}))}))},handleLoading:function(){return s(this.images)},handleMouseUp:function(){this.mouse.isMoving=!1},handleMouseDown:function(e){this.mouse.savedPositionX=e.pageX,this.mouse.isMoving=!0},handleMouseMove:function(e){this.handleMovement(e.pageX)},handleMouseLeave:function(){this.mouse.isMoving=this.mouse.isMoving&&!1}},"handleMouseMove",(function(e){this.handleMovement(e.pageX)})),o(t,"handleTouchStart",(function(e){e.preventDefault(),this.mouse.savedPositionX=e.touches[0].pageX,this.mouse.isMoving=!0})),o(t,"handleTouchEnd",(function(){this.mouse.isMoving=!1})),o(t,"handleTouchMove",(function(e){e.preventDefault(),this.handleMovement(e.touches[0].pageX)})),o(t,"handleMovement",(function(e){if(this.mouse.isMoving){this.mouse.currentPositionX=e;var t=this.mouse.currentPositionX-this.mouse.savedPositionX;Math.abs(t)>this.speed&&(this.mouse.savedPositionX=this.mouse.currentPositionX,t>0&&!this.reverse||t<0&&this.reverse?this.slideToRight():this.slideToLeft())}})),o(t,"slideToRight",(function(){this.carousel.current<this.images.length?(this.carousel.current+=1,this.carousel.currentPath=this.images[this.carousel.current-1]):this.infinite&&(this.carousel.current=0,this.carousel.currentPath=this.images[this.carousel.current])})),o(t,"slideToLeft",(function(){this.carousel.current>1?(this.carousel.current-=1,this.carousel.currentPath=this.images[this.carousel.current-1]):this.infinite&&(this.carousel.current=this.images.length,this.carousel.currentPath=this.images[this.carousel.current-1])})),o(t,"slideTo",(function(e){this.images[e]&&(this.carousel.current=e,this.carousel.currentPath=this.images[0===e?e:e-1])})),o(t,"setImages",(function(e){this.images=e})),t))}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(654)})()}));