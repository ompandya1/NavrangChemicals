import {
  FinishedProductInwardService
} from "./chunk-ZQWSQRVT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OMRRAGFO.js";
import {
  Router,
  RouterLink
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  DatePipe,
  NgForOf
} from "./chunk-JLFMSZUT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/finished-product-inward/finished-product-inward.ts
function FinishedProductInwardComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.lotNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, r_r1.inwardDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.bags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.perKg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.grossQty);
  }
}
var FinishedProductInwardComponent = class _FinishedProductInwardComponent {
  service;
  cd;
  router;
  Inward = [];
  searchTerm = "";
  constructor(service, cd, router) {
    this.service = service;
    this.cd = cd;
    this.router = router;
  }
  ngOnInit() {
    this.service.getInward().subscribe({
      next: (data) => {
        this.Inward = data;
        this.cd.markForCheck();
        console.log("products from backend: ", this.Inward);
      },
      error: (err) => console.error("error fetching inwards: ", err)
    });
  }
  FilteredInwards() {
    const term = this.searchTerm.toLowerCase();
    return this.Inward.filter((r) => (r.lotNo?.toString() ?? "").includes(term) || (r.productName ?? "").toLowerCase().includes(term) || (r.inwardDate ?? "").toLowerCase().includes(term) || (r.grossQty?.toString() ?? "").includes(term) || (r.bags?.toString() ?? "").includes(term) || (r.perKg?.toString() ?? "").includes(term));
  }
  static \u0275fac = function FinishedProductInwardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinishedProductInwardComponent)(\u0275\u0275directiveInject(FinishedProductInwardService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinishedProductInwardComponent, selectors: [["app-finished-product-inward"]], decls: 36, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-finished-product-inward", 1, "btn", "btn-primary", "ms-auto"], [1, "fa", "fa-plus"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"]], template: function FinishedProductInwardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Finished Product Inward");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14, " Add a new Finished Product Inward ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function FinishedProductInwardComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Lot No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Finished Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Inward Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Kg/Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Gross Quantity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, FinishedProductInwardComponent_tr_35_Template, 16, 10, "tr", 13);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.FilteredInwards());
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinishedProductInwardComponent, [{
    type: Component,
    args: [{ selector: "app-finished-product-inward", imports: [CommonModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="wrapper">\n  <div class="main-content">\n    <section class="content-header">\n      <div class="container-fluid">\n        <h3>Finished Product Inward</h3>\n      </div>\n    </section>\n\n    <section class="content">\n      <div class="container-fluid">\n        <div class="card">\n          <div\n            class="card-header d-flex justify-content-between align-items-center"\n          >\n            <h3 class="card-title mb-0">Details</h3>\n            <button class="btn btn-primary ms-auto" routerLink= "/add-finished-product-inward">\n             <i class="fa fa-plus"></i> Add a new Finished Product Inward\n            </button>\n          </div>\n\n          <div class="card-body">\n            <input\n              type="text"\n              class="form-control mb-3"\n              placeholder="Search..."\n              [(ngModel)]="searchTerm"\n            />\n\n            <table\n              class="table table-bordered table-hover"\n              style="text-align: center"\n            >\n              <thead>\n                <tr>\n                  <th>Sr.No.</th>\n                  <th>Lot No.</th>\n                  <th>Finished Product Name</th>\n                  <th>Inward Date</th>\n                  <th>Bags</th>\n                  <th>Kg/Bags</th>\n                  <th>Gross Quantity</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let r of FilteredInwards(); let i = index">\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ r.lotNo }}</td>\n                  <td>{{ r.productName }}</td>\n                  <td>{{ r.inwardDate | date : "short" }}</td>\n                  <td>{{ r.bags }}</td>\n                  <td>{{ r.perKg }}</td>\n                  <td>{{ r.grossQty }}</td>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n' }]
  }], () => [{ type: FinishedProductInwardService }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinishedProductInwardComponent, { className: "FinishedProductInwardComponent", filePath: "src/app/pages/finished-product-inward/finished-product-inward.ts", lineNumber: 14 });
})();
export {
  FinishedProductInwardComponent
};
//# sourceMappingURL=chunk-PAGXWMW6.js.map
