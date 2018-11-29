"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Displaceable=/*#__PURE__*/function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,a);try{this.nodes=this.normalizeNodes(b),this.initializeSettings(c),this.initializeTrigger()}catch(a){return console.error(a)}this.initializeNodes(),this.addEventListeners()}return _createClass(a,[{key:"normalizeNodes",value:function b(a){if(!a)throw new Error("Unable to initialize Displaceable: "+"\"".concat(a,"\" is not a Node, NodeLists or array of Nodes."));return a instanceof Node?[a]:a instanceof NodeList?[].slice.call(a):a instanceof Array?(a.forEach(function(a){if(!(a instanceof Node))throw new Error("Error: \"".concat(a,"\" is not a valid Node."))}),a):void 0}},{key:"initializeSettings",value:function b(a){this.settings=_objectSpread({displaceFactor:3,lockX:!1,lockY:!1,resetTime:1e3,skewFactor:5,trigger:window},a)}},{key:"initializeTrigger",value:function g(){var a=this.settings.trigger;if(!(a instanceof Node)&&a!==window)throw new Error("Error: \"".concat(a,"\" is not a valid displacement trigger. ")+"The displacement trigger must be a valid HTML Node.");if(a===window)this.triggerCenterX=window.innerWidth/2,this.triggerCenterY=window.innerHeight/2;else{var b=a.getBoundingClientRect(),c=b.x,d=b.y,e=b.width,f=b.height;if(0===e||0===f)throw new Error("Error: \"".concat(a,"\" has invalid dimensions. ")+"Both width and height must be greater than zero.");this.triggerCenterX=c+e/2,this.triggerCenterY=d+f/2}}},{key:"initializeNodes",value:function a(){this.nodes.forEach(function(a){a.style.pointerEvents="none",a.style.willChange="transform"})}},{key:"addEventListeners",value:function c(){var a=this,b=this.settings.trigger;b.onmousemove=function(b){return a.handleMouseMove(b)},b.onmouseout=function(){return a.handleMouseOut()},window.addEventListener("resize",function(){return a.initializeTrigger()})}},{key:"handleMouseMove",value:function c(a){var b=this;window.requestAnimationFrame(function(){return b.animateNodes(a)})}},{key:"handleMouseOut",value:function c(){var a=this,b=this.settings.resetTime;window.requestAnimationFrame(function(){a.nodes.forEach(function(a){a.style.transition="transform ".concat(b,"ms"),a.style.transform=""})})}},{key:"animateNodes",value:function i(a){var b=a.clientX,c=a.clientY,d=b-this.triggerCenterX,e=c-this.triggerCenterY,f=this.settings,g=f.displaceFactor,h=f.skewFactor;this.nodes.forEach(function(a){var b=Math.sqrt,c=Math.abs;g=a.dataset.displaceFactor?parseFloat(a.dataset.displaceFactor):g,h=a.dataset.skewFactor?parseFloat(a.dataset.skewFactor):h;var f=h/100,i=b(c(d))*g,j=b(c(e))*g,k=b(c(d))*f,l=b(c(e))*f;0>d&&(i*=-1,k*=-1,l*=-1),0>e&&(j*=-1);var m="translate(".concat(i,"px, ").concat(j,"px) ")+"skew(".concat(l,"deg, ").concat(k,"deg)");a.style.transition="transform .05s",a.style.transform=m})}}]),a}();exports.default=Displaceable;