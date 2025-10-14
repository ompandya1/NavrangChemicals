import {
  RawMaterialInwardService
} from "./chunk-7ZAWF53U.js";
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

// src/app/pages/raw-material-inward/raw-material-inward.ts
function RawMaterialInwardComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.rawMaterial == null ? null : r_r1.rawMaterial.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, r_r1.inwardDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r1.bags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.perKg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.grossQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.purity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.realWt);
  }
}
var RawMaterialInwardComponent = class _RawMaterialInwardComponent {
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
    this.service.getInwards().subscribe({
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
    return this.Inward.filter((r) => (r.rawMaterial?.name ?? "").toLowerCase().includes(term) || (r.supplier?.name ?? "").toLowerCase().includes(term) || (r.po?.address ?? "").toLowerCase().includes(term) || (r.inwardDate ?? "").toLowerCase().includes(term) || (r.bags ?? "").toString().toLowerCase().includes(term) || (r.perKg ?? "").toString().toLowerCase().includes(term) || (r.grossQty?.toString() ?? "").includes(term) || (r.purity?.toString() ?? "").includes(term) || (r.realWt?.toString() ?? "").includes(term));
  }
  static \u0275fac = function RawMaterialInwardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RawMaterialInwardComponent)(\u0275\u0275directiveInject(RawMaterialInwardService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RawMaterialInwardComponent, selectors: [["app-raw-material-inward"]], decls: 38, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-raw-material-inward", 1, "btn", "btn-primary", "ms-auto"], [1, "fa", "fa-plus"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"]], template: function RawMaterialInwardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Raw Materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14, " Add a new Raw Material ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function RawMaterialInwardComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Raw Material Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Inward Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "PerKg");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "GrossQty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Purity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "RealWt");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "tbody");
      \u0275\u0275template(37, RawMaterialInwardComponent_tr_37_Template, 18, 11, "tr", 13);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.FilteredInwards());
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RawMaterialInwardComponent, [{
    type: Component,
    args: [{ selector: "app-raw-material-inward", imports: [CommonModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="wrapper">\n  <div class="main-content">\n    <section class="content-header">\n      <div class="container-fluid">\n        <h3>Raw Materials</h3>\n      </div>\n    </section>\n\n    <section class="content">\n      <div class="container-fluid">\n        <div class="card">\n          <div\n            class="card-header d-flex justify-content-between align-items-center"\n          >\n            <h3 class="card-title mb-0">Details</h3>\n            <button class="btn btn-primary ms-auto" routerLink="/add-raw-material-inward">\n             <i class="fa fa-plus"></i> Add a new Raw Material\n            </button>\n          </div>\n\n          <div class="card-body">\n            <input\n              type="text"\n              class="form-control mb-3"\n              placeholder="Search..."\n              [(ngModel)]="searchTerm"\n            />\n\n            <table\n              class="table table-bordered table-hover"\n              style="text-align: center"\n            >\n              <thead>\n                <tr>\n                  <th>Sr.No.</th>\n                  <th>Raw Material Name</th>\n                  <th>Inward Date</th>\n                  <th>Bags</th>\n                  <th>PerKg</th>\n                  <th>GrossQty</th>\n                  <th>Purity</th>\n                  <th>RealWt</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let r of FilteredInwards(); let i = index">\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ r.rawMaterial?.name }}</td>\n                  <td>{{ r.inwardDate | date : "short" }}</td>\n                  <td>{{ r.bags }}</td>\n                  <td>{{ r.perKg }}</td>\n                  <td>{{ r.grossQty }}</td>\n                  <td>{{ r.purity }}</td>\n                  <td>{{ r.realWt }}</td>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n' }]
  }], () => [{ type: RawMaterialInwardService }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RawMaterialInwardComponent, { className: "RawMaterialInwardComponent", filePath: "src/app/pages/raw-material-inward/raw-material-inward.ts", lineNumber: 48 });
})();
export {
  RawMaterialInwardComponent
};
//# sourceMappingURL=chunk-5FDH4CPP.js.map
