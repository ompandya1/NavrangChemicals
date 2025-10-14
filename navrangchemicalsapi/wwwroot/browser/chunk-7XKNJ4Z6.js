import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/home/home.ts
var Home = class _Home {
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[1, "wrapper"], [1, "main-content"], [1, "container-fluid", "mt-4", 2, "margin-left", "0"], [1, "row", "mt-3"], [1, "col-md-6", "mb-3"], ["src", "assets/navrang2.jpg", "alt", "Navrang Image 1", 1, "img-fluid"], ["src", "assets/navrang3.jpg", "alt", "Navrang Image 2", 1, "img-fluid"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Home");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 3)(6, "div", 4);
      \u0275\u0275domElement(7, "img", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 4);
      \u0275\u0275domElement(9, "img", 6);
      \u0275\u0275domElementEnd()()()()();
    }
  }, styles: ["\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  transition: margin-left 0.3s ease;\n}\n.main-content.shifted[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n.main-content.default[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [], template: '<div class="wrapper">\n  <div class="main-content">\n\n    <!-- Page Content -->\n    <div class="container-fluid mt-4" style="margin-left: 0">\n      <h3>Home</h3>\n      <div class="row mt-3">\n        <div class="col-md-6 mb-3">\n          <img\n            src="assets/navrang2.jpg"\n            class="img-fluid"\n            alt="Navrang Image 1"\n          />\n        </div>\n        <div class="col-md-6 mb-3">\n          <img\n            src="assets/navrang3.jpg"\n            class="img-fluid"\n            alt="Navrang Image 2"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/pages/home/home.css */\n.main-content {\n  flex: 1;\n  transition: margin-left 0.3s ease;\n}\n.main-content.shifted {\n  margin-left: 250px;\n}\n.main-content.default {\n  margin-left: 60px;\n}\n.wrapper {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 10 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-7XKNJ4Z6.js.map
