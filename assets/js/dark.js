
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(fn) {
 return typeof fn;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
!function(context, factory) {
 if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) {
   module.exports = factory();
 } else {
   if ("function" == typeof define && define.amd) {
     define("darkmode-js", [], factory);
   } else {
     if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) {
       exports["darkmode-js"] = factory();
     } else {
       context["darkmode-js"] = factory();
     }
   }
 }
}("undefined" != typeof self ? self : undefined, function() {
 return function(e) {
   function t(i) {
     if (n[i]) {
       return n[i].exports;
     }
     var module = n[i] = {
       i : i,
       l : false,
       exports : {}
     };
     return e[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
   }
   var n = {};
   return t.m = e, t.c = n, t.d = function(d, name, n) {
     if (!t.o(d, name)) {
       Object.defineProperty(d, name, {
         enumerable : true,
         get : n
       });
     }
   }, t.r = function(x) {
     if ("undefined" != typeof Symbol && Symbol.toStringTag) {
       Object.defineProperty(x, Symbol.toStringTag, {
         value : "Module"
       });
     }
     Object.defineProperty(x, "__esModule", {
       value : true
     });
   }, t.t = function(e, a) {
     if (1 & a && (e = t(e)), 8 & a) {
       return e;
     }
     if (4 & a && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) {
       return e;
     }
     var d = Object.create(null);
     if (t.r(d), Object.defineProperty(d, "default", {
       enumerable : true,
       value : e
     }), 2 & a && "string" != typeof e) {
       var key;
       for (key in e) {
         t.d(d, key, function(childProp) {
           return e[childProp];
         }.bind(null, key));
       }
     }
     return d;
   }, t.n = function(module) {
     var n = module && module.__esModule ? function() {
       return module.default;
     } : function() {
       return module;
     };
     return t.d(n, "a", n), n;
   }, t.o = function(property, object) {
     return Object.prototype.hasOwnProperty.call(property, object);
   }, t.p = "", t(t.s = 0);
 }([function(module, res, saveNotifs) {
   Object.defineProperty(res, "__esModule", {
     value : true
   });
   res.default = void 0;
   var fill = function(e) {
     if (e && e.__esModule) {
       return e;
     }
     var t = {};
     if (null != e) {
       var k;
       for (k in e) {
         if (Object.prototype.hasOwnProperty.call(e, k)) {
           var descriptor = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, k) : {};
           if (descriptor.get || descriptor.set) {
             Object.defineProperty(t, k, descriptor);
           } else {
             t[k] = e[k];
           }
         }
       }
     }
     return t.default = e, t;
   }(saveNotifs(1));
   var type = fill.default;
   res.default = type;
   if (fill.IS_BROWSER) {
     (function(node) {
       node.Darkmode = fill.default;
     })(window);
   }
   module.exports = res.default;
 }, function(canCreateDiscussions, t, n) {
   function defineProperties(target, props) {
     var i = 0;
     for (; i < props.length; i++) {
       var descriptor = props[i];
       descriptor.enumerable = descriptor.enumerable || false;
       descriptor.configurable = true;
       if ("value" in descriptor) {
         descriptor.writable = true;
       }
       Object.defineProperty(target, descriptor.key, descriptor);
     }
   }
   Object.defineProperty(t, "__esModule", {
     value : true
   });
   t.default = t.IS_BROWSER = void 0;
   var p = "undefined" != typeof window;
   t.IS_BROWSER = p;
   var offsetFromCenter = function() {
     function init(options) {
       if (function(service, name) {
         if (!(service instanceof name)) {
           throw new TypeError("Cannot call a class as a function");
         }
       }(this, init), p) {
         options = Object.assign({}, {
           bottom : "32px",
           right : "32px",
           left : "unset",
           time : "0.3s",
           mixColor : "#fff",
           backgroundColor : "#fff",
           buttonColorDark : "#100f2c",
           buttonColorLight : "#fff",
           label : " ",
           saveInCookies : true,
           autoMatchOsTheme : true
         }, options);
         var style = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(options.mixColor, ";\n        transition: all ").concat(options.time, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(options.right, ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left,
         ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(options.buttonColorDark, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(options.right,
         ";\n        bottom: ").concat(options.bottom, ";\n        left: ").concat(options.left, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(options.buttonColorLight, ";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(options.backgroundColor,
         ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    ");
         var l = document.createElement("div");
         var button = document.createElement("button");
         var i = document.createElement("div");
         button.innerHTML = options.label;
         button.classList.add("darkmode-toggle--inactive");
         l.classList.add("darkmode-layer");
         i.classList.add("darkmode-background");
         var selser = "true" === window.localStorage.getItem("darkmode");
         var reverseValue = options.autoMatchOsTheme && window.matchMedia("(prefers-color-scheme: dark)").matches;
         var reverseIsSingle = null === window.localStorage.getItem("darkmode");
         if (true === selser && options.saveInCookies || reverseIsSingle && reverseValue) {
           l.classList.add("darkmode-layer--expanded", "darkmode-layer--simple", "darkmode-layer--no-transition");
           button.classList.add("darkmode-toggle--white");
           document.body.classList.add("darkmode--activated");
         }
         document.body.insertBefore(button, document.body.firstChild);
         document.body.insertBefore(l, document.body.firstChild);
         document.body.insertBefore(i, document.body.firstChild);
         this.addStyle(style);
         this.button = button;
         this.layer = l;
         this.saveInCookies = options.saveInCookies;
         this.time = options.time;
       }
     }
     var Constructor;
     var protoProps;
     var staticProps;
     return Constructor = init, (protoProps = [{
       key : "addStyle",
       value : function include_css_byref(ref) {
         var fileref = document.createElement("link");
         fileref.setAttribute("rel", "stylesheet");
         fileref.setAttribute("type", "text/css");
         fileref.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(ref));
         document.head.appendChild(fileref);
       }
     }, {
       key : "showWidget",
       value : function render() {
         var channel = this;
         if (p) {
           var element = this.button;
           var layer = this.layer;
           var ngiScroll_timeout = 1e3 * parseFloat(this.time);
           element.classList.add("darkmode-toggle");
           element.classList.remove("darkmode-toggle--inactive");
           element.setAttribute("aria-label", "Activate dark mode");
           element.setAttribute("aria-checked", "false");
           element.setAttribute("role", "checkbox");
           layer.classList.add("darkmode-layer--button");
           element.addEventListener("click", function() {
             var hiddenBefore = channel.isActivated();
             if (hiddenBefore) {
               layer.classList.remove("darkmode-layer--simple");
               element.setAttribute("disabled", true);
               setTimeout(function() {
                 layer.classList.remove("darkmode-layer--no-transition");
                 layer.classList.remove("darkmode-layer--expanded");
                 element.removeAttribute("disabled");
               }, 1);
             } else {
               layer.classList.add("darkmode-layer--expanded");
               element.setAttribute("disabled", true);
               setTimeout(function() {
                 layer.classList.add("darkmode-layer--no-transition");
                 layer.classList.add("darkmode-layer--simple");
                 element.removeAttribute("disabled");
               }, ngiScroll_timeout);
             }
             element.classList.toggle("darkmode-toggle--white");
             document.body.classList.toggle("darkmode--activated");
             window.localStorage.setItem("darkmode", !hiddenBefore);
           });
         }
       }
     }, {
       key : "toggle",
       value : function render() {
         if (p) {
           var targettedRow = this.layer;
           var hiddenBefore = this.isActivated();
           var element = this.button;
           targettedRow.classList.toggle("darkmode-layer--simple");
           document.body.classList.toggle("darkmode--activated");
           window.localStorage.setItem("darkmode", !hiddenBefore);
           element.setAttribute("aria-label", "De-activate dark mode");
           element.setAttribute("aria-checked", "true");
         }
       }
     }, {
       key : "isActivated",
       value : function _drop_func() {
         return p ? document.body.classList.contains("darkmode--activated") : null;
       }
     }]) && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), init;
   }();
   t.default = offsetFromCenter;
 }]);
});